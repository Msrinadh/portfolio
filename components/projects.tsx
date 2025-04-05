"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

const projects = [
  {
    title: "College Query Chatbot",
    description:
      "Built using Google Cloud, Vertex AI, and Dialogflow. Optimized user experience by addressing college-related queries and offering timely assistance. Integrated AI and NLP to provide accurate and efficient responses.",
    tags: ["Google Cloud", "Vertex AI", "Dialogflow", "NLP"],
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Doctor Appointment Chatbot",
    description:
      "Engineered a Doctor Appointment Chat-bot, increasing appointment bookings by 25%. Implemented text translation, reducing manual processing time by 40%. Applied Natural Language Processing (NLP) techniques to improve chatbot interactions.",
    tags: ["NLP", "Entity Recognition", "React", "API"],
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "AI Email Marketing Automation",
    description:
      "Automated email marketing campaigns using GPT-4 for content generation integrated with Google Sheets API and SMTP.",
    tags: ["GPT-4", "Google Sheets API", "SMTP", "Automation"],
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Voice-to-SQL Query Generator",
    description: "Converted voice commands to SQL queries using Whisper for transcription and GPT for SQL generation.",
    tags: ["Whisper", "GPT", "SQL", "Voice Recognition"],
    image:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1536&q=80",
  },
  {
    title: "AI Finance Tracker",
    description:
      "Developed an interactive finance tracker using machine learning to predict monthly expenses and provide actionable insights. Enabled over 500 active users to increase their savings by 25%. Utilized machine learning algorithms to predict spending patterns and provide budgeting recommendations.",
    tags: ["Machine Learning", "Finance", "Predictive Analytics", "Data Visualization"],
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
  },
  {
    title: "Food Truck",
    description:
      "Engineered an interactive webpage with HTML and CSS that displayed details for 15 nearby food centers; optimized the layout for effortless browsing, resulting in increased engagement from users seeking dining options.",
    tags: ["HTML", "CSS", "UI/UX", "Responsive Design"],
    image:
      "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
  },
  {
    title: "Stocks Analyzer",
    description:
      "Developed an AI-powered stocks analyzer that assessed market trends and stock performance, leading to a 30% improvement in forecasting accuracy. Leveraged predictive analytics to forecast stock prices, identifying high-potential investment opportunities with a 25% higher return rate.",
    tags: ["AI", "Predictive Analytics", "Financial Data", "Market Analysis"],
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Job Description Keyword Extractor",
    description:
      "Developed a tool that extracts keywords from job descriptions using OpenAI and BeautifulSoup for web scraping.",
    tags: ["OpenAI", "BeautifulSoup", "Web Scraping", "NLP"],
    image:
      "https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const isMobile = useMobile()
  const [currentPage, setCurrentPage] = useState(0)
  const projectsPerPage = isMobile ? 1 : 3
  const totalPages = Math.ceil(projects.length / projectsPerPage)

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev))
  }

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev))
  }

  const visibleProjects = projects.slice(currentPage * projectsPerPage, (currentPage + 1) * projectsPerPage)

  return (
    <section id="projects" className="py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">Featured Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="h-full"
            >
              <Card className="glassmorphism border-none h-full flex flex-col overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                  <CardDescription className="text-white/70">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded-full text-xs bg-secondary/20 text-secondary border border-secondary/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center">{/* Links removed as requested */}</CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-10 gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrevPage}
            disabled={currentPage === 0}
            className="border-secondary text-secondary hover:bg-secondary/10"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="flex items-center text-white/70">
            {currentPage + 1} / {totalPages}
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={handleNextPage}
            disabled={currentPage === totalPages - 1}
            className="border-secondary text-secondary hover:bg-secondary/10"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </motion.div>
    </section>
  )
}

