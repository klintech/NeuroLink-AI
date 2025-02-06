"use client"

import { useState } from "react"
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800">
          NeuroLink AI
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-gray-800 hover:text-blue-600">
            Home
          </Link>
          <Link href="/about" className="text-gray-800 hover:text-blue-600">
            About
          </Link>
          <Link href="/services" className="text-gray-800 hover:text-blue-600">
            Services
          </Link>
          <Link href="/research" className="text-gray-800 hover:text-blue-600">
            Research
          </Link>
          <Link href="/contact" className="text-gray-800 hover:text-blue-600">
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden">
          <Link href="/" className="block py-2 px-4 text-sm hover:bg-gray-200">
            Home
          </Link>
          <Link href="/about" className="block py-2 px-4 text-sm hover:bg-gray-200">
            About
          </Link>
          <Link href="/services" className="block py-2 px-4 text-sm hover:bg-gray-200">
            Services
          </Link>
          <Link href="/research" className="block py-2 px-4 text-sm hover:bg-gray-200">
            Research
          </Link>
          <Link href="/contact" className="block py-2 px-4 text-sm hover:bg-gray-200">
            Contact
          </Link>
        </div>
      )}
    </header>
  )
}

