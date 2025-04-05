"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold gradient-text mb-2">Srinadh Makkapati</h3>
            <p className="text-white/70 mb-4">AI Enthusiast & Full-Stack Developer</p>
          </div>
          <div className="flex items-center justify-center text-white/50 text-sm">
            <p>© {new Date().getFullYear()} • Built with</p>
            <Heart className="h-4 w-4 mx-1 text-accent" />
            <p>using Next.js & React Three Fiber</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

