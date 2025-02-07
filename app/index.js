"use client"

import Head from "next/head"
import { useState, useEffect } from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Features from "../components/Features"
import TechShowcase from "../components/TechShowcase"
import Testimonials from "../components/Testimonials"
import NewsletterSignup from "../components/NewsletterSignup"
import Footer from "../components/Footer"

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scroll = `${totalScroll / windowHeight}`

      setScrollProgress(scroll)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>NeuroLink AI - Advancing Human Potential</title>
        <meta
          name="description"
          content="NeuroLink AI - Pioneering brain-computer interfaces and AI-enhanced cognitive technologies"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header scrollProgress={scrollProgress} />

      <main>
        <Hero />
        <Features />
        <TechShowcase />
        <Testimonials />
        <NewsletterSignup />
      </main>

      <Footer />
    </div>
  )
}

