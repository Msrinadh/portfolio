import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Certifications from "@/components/certifications"
import Internships from "@/components/internships"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import BackgroundCanvas from "@/components/background-canvas"

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <BackgroundCanvas />
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Internships />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

