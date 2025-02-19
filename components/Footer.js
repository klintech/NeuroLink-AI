import Link from "next/link"

export default function Footer() {
  if (typeof window !== 'undefined') {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">NeuroLink AI</h3>
              <p className="text-sm">Advancing human potential through cutting-edge neurotechnology and AI.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <ul className="text-sm">
                <li>
                  <a href="/" className="hover:text-blue-400">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-blue-400">
                    About
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-blue-400">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/features" className="hover:text-blue-400">
                    Features
                  </a>
                </li>
                <li>
                  <a href="/research" className="hover:text-blue-400">
                    Research
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-blue-400">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-blue-400">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-white hover:text-blue-400">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="text-white hover:text-blue-400">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-white hover:text-blue-400">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-4 text-sm text-center">
            <p>&copy; 2025 NeuroLink AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  } else {
    return null
  }
}