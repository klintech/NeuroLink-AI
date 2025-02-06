import ResearchSlider from "./ResearchSlider"

export default function Research() {
  const researchTopics = [
    {
      title: "Neural Mesh Technology",
      description: "Developing ultra-thin, flexible neural interfaces for seamless brain integration.",
    },
    {
      title: "AI-Enhanced Learning",
      description: "Exploring ways to accelerate learning and skill acquisition through AI assistance.",
    },
    {
      title: "Emotion Regulation Systems",
      description: "Creating adaptive systems for real-time emotional state optimization.",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Research</h2>
        <ResearchSlider topics={researchTopics} />
      </div>
    </section>
  )
}

