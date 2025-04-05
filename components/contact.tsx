"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Linkedin, Github, Send, Phone } from "lucide-react"

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({ name: "", email: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">Get In Touch</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="glassmorphism border-none h-full">
              <CardHeader>
                <CardTitle className="text-2xl gradient-text">Contact Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-secondary mr-3" />
                  <a href="mailto:srinadh2k4@gmail.com" className="text-white hover:text-secondary transition-colors">
                    srinadh2k4@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Linkedin className="h-5 w-5 text-secondary mr-3" />
                  <a
                    href="https://www.linkedin.com/in/srinadh-makkapati"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-secondary transition-colors"
                  >
                    www.linkedin.com/in/srinadh-makkapati
                  </a>
                </div>
                <div className="flex items-center">
                  <Github className="h-5 w-5 text-secondary mr-3" />
                  <a
                    href="https://github.com/srinadhmakkapati"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-secondary transition-colors"
                  >
                    github.com/srinadhmakkapati
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-secondary mr-3" />
                  <a href="tel:9182550394" className="text-white hover:text-secondary transition-colors">
                    +91 9182550394
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="glassmorphism border-none">
              <CardHeader>
                <CardTitle className="text-2xl gradient-text">Send Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="bg-white/5 border-white/10 focus:border-secondary"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="bg-white/5 border-white/10 focus:border-secondary"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      className="bg-white/5 border-white/10 focus:border-secondary min-h-[120px]"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className="w-full bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : isSubmitted ? (
                      "Demo: Message Sent Successfully!"
                    ) : (
                      <>
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

