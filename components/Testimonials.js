"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Dr. Sarah Chen",
    role: "Neuroscientist",
    content:
      "NeuroLink AI's technology has revolutionized our understanding of the brain. It's opening up possibilities we never thought were achievable.",
    image: "/sarahchen.jpeg",
  },
  {
    name: "Mark Johnson",
    role: "AI Researcher",
    content:
      "The cognitive enhancement capabilities of NeuroLink AI are truly groundbreaking. It's like having a supercomputer integrated with your brain.",
    image: "/Mark Johnson.jpeg",
  },
  {
    name: "Emily Rodriguez",
    role: "Early Adopter",
    content:
      "As someone with a neurological condition, NeuroLink AI has given me back control over my life. It's not just technology; it's life-changing.",
    image: "/Emily Rodriguez.jpeg",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What People Are Saying</h2>
        <div className="relative max-w-lg mx-auto h-80">
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center"
            >
              <img
                src={testimonials[currentIndex].image || "/placeholder.svg"}
                alt={testimonials[currentIndex].name}
                className="w-20 h-20 rounded-full mb-4 object-cover"
                style={{ maxWidth: '100px', maxHeight: '100px' }}
              />
              <p className="text-lg mb-4 max-w-md">{testimonials[currentIndex].content}</p>
              <h3 className="text-xl font-semibold">{testimonials[currentIndex].name}</h3>
              <p className="text-blue-400">{testimonials[currentIndex].role}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-1 ${index === currentIndex ? "bg-blue-500" : "bg-gray-500"}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}