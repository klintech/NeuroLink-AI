import Link from "next/link"

const features = [
  {
    title: "Neural Interface",
    description: "Direct brain-computer communication for seamless control and interaction.",
    icon: "🧠",
    slug: "neural-interface",
  },
  {
    title: "Cognitive Enhancement",
    description: "AI-powered tools to boost memory, focus, and problem-solving abilities.",
    icon: "💡",
    slug: "cognitive-enhancement",
  },
  {
    title: "Emotional Intelligence",
    description: "Advanced algorithms to understand and regulate emotional states.",
    icon: "😊",
    slug: "emotional-intelligence",
  },
  {
    title: "Thought-to-Text",
    description: "Convert thoughts directly into written or spoken language.",
    icon: "💬",
    slug: "thought-to-text",
  },
]

export default function FeaturesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Features</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h2 className="text-2xl font-semibold mb-2">{feature.title}</h2>
            <p className="text-gray-600 mb-4">{feature.description}</p>
            <Link href={`/features/${feature.slug}`} className="text-blue-500 hover:text-blue-700">
              Learn more →
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

