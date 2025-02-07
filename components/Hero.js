import Link from "next/link"

export default function Hero() {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Advancing Human Potential</h1>
        <p className="text-xl mb-8">Pioneering brain-computer interfaces and AI-enhanced cognitive technologies</p>
        <Link href="/features" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Explore Our Features
        </Link>
      </div>
    </section>
  )
}

