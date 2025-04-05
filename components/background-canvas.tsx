"use client"

import { useRef } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import type * as THREE from "three"
import { random } from "maath"

function ParticleField({ count = 5000 }) {
  const points = useRef<THREE.Points>(null!)
  const sphere = random.inSphere(new Float32Array(count * 3), { radius: 20 })

  useFrame((state, delta) => {
    if (points.current) {
      points.current.rotation.x -= delta / 10
      points.current.rotation.y -= delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={points} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#b026ff" size={0.05} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}

function BackgroundMesh() {
  const mesh = useRef<THREE.Mesh>(null!)
  const { viewport } = useThree()

  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.x = Math.sin(clock.getElapsedTime() / 10) * 0.1
      mesh.current.rotation.y = Math.sin(clock.getElapsedTime() / 15) * 0.1
    }
  })

  return (
    <mesh ref={mesh} scale={[viewport.width * 2, viewport.height * 2, 1]} position={[0, 0, -5]}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <meshStandardMaterial color="#050816" wireframe emissive="#b026ff" emissiveIntensity={0.1} />
    </mesh>
  )
}

export default function BackgroundCanvas() {
  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.1} />
        <BackgroundMesh />
        <ParticleField />
      </Canvas>
    </div>
  )
}

