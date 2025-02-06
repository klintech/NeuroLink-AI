"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const technologies = [
  {
    name: "Neural Mesh",
    description: "Ultra-thin, flexible neural interface that seamlessly integrates with the brain.",
    image: "/neural-mesh.jpeg",
  },
  {
    name: "Cognitive Amplifier",
    description: "AI-powered system that enhances cognitive abilities and accelerates learning.",
    image: "/cognitive amplifier.jpeg",
  },
  {
    name: "Emotion Regulator",
    description: "Advanced algorithms for real-time emotional state analysis and optimization.",
    image: "/Emotion Regulator.jpg",
  },
]

export default function TechShowcase() {
  const [selectedTech, setSelectedTech] = useState(technologies[0])

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Revolutionary Technologies</h2>
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className={`p-4 mb-4 rounded-lg cursor-pointer ${selectedTech.name === tech.name ? "bg-blue-500" : "bg-gray-800"}`}
                onClick={() => setSelectedTech(tech)}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
                <p className="text-sm text-gray-300">{tech.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="w-full lg:w-2/3 lg:pl-8">
            <AnimatePresence exitBeforeEnter>
              <motion.div
                key={selectedTech.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-800 rounded-lg overflow-hidden"
              >
                <img
                  src={selectedTech.image || "/placeholder.svg"}
                  alt={selectedTech.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">{selectedTech.name}</h3>
                  <p className="text-gray-300 mb-4">{selectedTech.description}</p>
                  <a href="#" className="text-blue-400 hover:text-blue-300">
                    Learn more about {selectedTech.name} →
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

