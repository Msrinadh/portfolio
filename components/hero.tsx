"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export default function Hero() {
  const isMobile = useMobile()

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="text-center max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 gradient-text">Srinadh Makkapati</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-xl md:text-2xl mb-8 text-white/80">
            <span className="glow">AI Enthusiast</span> | <span className="glow-pink">GPT Builder</span> |{" "}
            <span className="glow">Full-Stack Explorer</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
        >
          <Button
  size={isMobile ? "default" : "lg"}
  className="bg-primary hover:bg-primary/80 text-white"
  asChild
>
  <a
    href="https://drive.google.com/file/d/1XZu9OwsNcyUxX_qT6nW6Ts3PlI2rfdoB/view"
    target="_blank"
    rel="noopener noreferrer"
  >
    View Resume
  </a>
</Button>

<Button
  size={isMobile ? "default" : "lg"}
  variant="outline"
  className="border-secondary text-secondary hover:bg-secondary/10"
  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
>
  View Projects <ArrowRight className="ml-2 h-4 w-4" />
</Button>

        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 animate-float"
        >
          <div className="w-16 h-16 mx-auto border-b-2 border-secondary">
            <div className="w-3 h-3 mx-auto bg-secondary rounded-full animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

