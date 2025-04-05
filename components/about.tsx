"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">About Me</h2>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/3 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-64">
              <div className="absolute inset-0 rounded-full neon-border overflow-hidden">
                <Image
                  src="/profile.jpeg"
                  alt="Srinadh Makkapati"
                  width={320}
                  height={320}
                  className="rounded-full object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:w-2/3"
          >
            <Card className="glassmorphism border-none">
              <CardContent className="p-6 md:p-8">
                <p className="text-lg leading-relaxed text-white/90">
                  I'm a passionate B.Tech student with a love for AI, Generative Pretrained Transformers, and chatbot
                  innovation. I've independently built GPT-powered tools, worked on recommendation systems, and
                  automated workflows with state-of-the-art AI tools.
                </p>
                <p className="text-lg leading-relaxed mt-4 text-white/90">
                  My journey in tech has been driven by curiosity and a desire to create practical solutions using
                  cutting-edge technologies. I enjoy exploring the intersection of AI and user-friendly applications,
                  with a focus on making complex technologies accessible and useful.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">{/* Tags removed as requested */}</div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

