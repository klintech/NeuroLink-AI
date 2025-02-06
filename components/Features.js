"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const features = [
  {
    title: "Neural Interface",
    description: "Direct brain-computer communication for seamless control and interaction.",
    icon: "🧠",
  },
  {
    title: "Cognitive Enhancement",
    description: "AI-powered tools to boost memory, focus, and problem-solving abilities.",
    icon: "💡",
  },
  {
    title: "Emotional Intelligence",
    description: "Advanced algorithms to understand and regulate emotional states.",
    icon: "😊",
  },
  {
    title: "Thought-to-Text",
    description: "Convert thoughts directly into written or spoken language.",
    icon: "💬",
  },
]

export default function Features() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section id="features" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Cutting-Edge Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 rounded-lg p-6 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
              {hoveredIndex === index && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-4">
                  <a href="#" className="text-blue-400 hover:text-blue-300">
                    Learn more →
                  </a>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

