import type React from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Space_Grotesk as SpaceGrotesk, Poppins } from "next/font/google"
import { cn } from "@/lib/utils"

const spaceGrotesk = SpaceGrotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
})

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata = {
  title: "Srinadh Makkapati | AI Enthusiast & Full-Stack Developer",
  description:
    "Personal portfolio of Srinadh Makkapati, AI Enthusiast, SHL Intern, GPT Builder, and Full-Stack Explorer",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", spaceGrotesk.variable, poppins.variable)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'