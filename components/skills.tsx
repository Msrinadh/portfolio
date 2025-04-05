"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useMobile } from "@/hooks/use-mobile"

const skillCategories = [
  {
    name: "Programming Languages",
    skills: ["C", "Java", "Python", "REST API development"],
    color: "primary",
  },
  {
    name: "Frameworks/Tools",
    skills: ["React", "Nodejs", "Figma", "Django"],
    color: "secondary",
  },
  {
    name: "Cloud Technologies",
    skills: ["Google Cloud", "Vertix AI", "Dialogflow", "AWS", "Salesforce", "Service Now"],
    color: "accent",
  },
  {
    name: "Web Development",
    skills: ["HTML", "CSS", "Javascript", "Bootstrap"],
    color: "primary",
  },
  {
    name: "AI Engineering",
    skills: ["Oracle", "Google", "LangChain", "Natural Language Processing", "Computer Vision","LLM"],
    color: "secondary",
  },
  {
    name: "Software Development",
    skills: ["Data Structures", "Algorithms", "Git", "SDLC"],
    color: "accent",
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const isMobile = useMobile()

  return (
    <section id="skills" className="py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">Expertise</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * categoryIndex }}
            >
              <Card className={`glassmorphism border-none h-full`}>
                <CardHeader>
                  <CardTitle
                    className={`text-${category.color} glow-${category.color === "primary" ? "" : category.color}`}
                  >
                    {category.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        className={`px-3 py-1 rounded-full text-sm bg-${category.color}/20 text-${category.color} border border-${category.color}/30`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

