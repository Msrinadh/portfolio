"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

const certifications = [
  {
    title: "Oracle Generative AI",
    issuer: "Oracle",
  },
  {
    title: "Prompt Engineering",
    issuer: "IBM",
  },
  {
    title: "Salesforce AI Associate",
    issuer: "Salesforce",
  },
  {
    title: "Cloud Fundamentals",
    issuer: "AWS",
  },
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM",
  },
  {
    title: "Deep Learning Specialisation",
    issuer: "Infosys Springboard",
  },
]

export default function Certifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="certifications" className="py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">Recognitions</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="glassmorphism border-none h-full">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-start">
                    <CheckCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-1" />
                    <span>{cert.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70">Issued by {cert.issuer}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

