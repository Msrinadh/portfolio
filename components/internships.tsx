"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase } from "lucide-react"

const internships = [
  {
    company: "Xgenie Soft",
    position: "Full Stack Developer",
    period: "2023",
    description:
      "Created a landing page using React.js frameworks, improving user engagement by 30%. Led digital marketing initiatives, increasing website traffic by 20%. Enhanced web applications, reducing load time by 15%.",
  },
  {
    company: "Infosys Springboard",
    position: "AI Intern",
    period: "2024",
    description:
      "Engineered a Doctor Appointment Chat-bot, increasing appointment bookings by 25%. Implemented text translation, reducing manual processing time by 40%. Applied Natural Language Processing (NLP) techniques to improve chatbot interactions.",
  },
  {
    company: "Revino",
    position: "AI Intern",
    period: "2025",
    description:
      "Contributed to a chatbot MVP that automated lead generation for a SaaS product.",
  },
]

export default function Internships() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="internships" className="py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">Internships</h2>

        <div className="space-y-8 max-w-3xl mx-auto">
          {internships.map((internship, index) => (
            <motion.div
              key={`${internship.company}-${index}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
            >
              <Card className="glassmorphism border-none overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 bg-gradient-to-br from-primary/20 to-secondary/20 p-6 flex items-center justify-center">
                    <div className="text-center">
                      <Briefcase className="h-12 w-12 mx-auto text-secondary mb-2" />
                      <h3 className="text-xl font-bold">{internship.company}</h3>
                      <p className="text-white/70">{internship.period}</p>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-6">
                    <CardHeader className="p-0 pb-2">
                      <CardTitle>{internship.position}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 pt-2">
                      <p className="text-white/80">{internship.description}</p>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

