import { Inter } from 'next/font/google'
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../styles/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "NeuroLink AI - Advancing Human Potential",
  description: "Pioneering brain-computer interfaces and AI-enhanced cognitive technologies",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="pt-0">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

