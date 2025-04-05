"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, OrbitControls, Environment } from "@react-three/drei"
import type * as THREE from "three"

function Avatar(props: any) {
  const group = useRef<THREE.Group>(null!)
  const { nodes, materials } = useGLTF("/assets/3d/duck.glb") as any

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2
      group.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.1
    }
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Duck.geometry}
        material={materials.DuckMaterial}
        rotation={[Math.PI / 2, 0, 0]}
        scale={2}
      >
        <meshStandardMaterial
          color="#b026ff"
          emissive="#b026ff"
          emissiveIntensity={0.2}
          metalness={0.5}
          roughness={0.2}
        />
      </mesh>
    </group>
  )
}

export default function AvatarCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <Avatar position={[0, -1, 0]} />
      <Environment preset="city" />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  )
}

