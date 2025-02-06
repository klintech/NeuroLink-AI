export default function Services() {
    const services = [
      {
        icon: "🧠",
        title: "Neural Interfaces",
        description: "Direct brain-computer communication for seamless control and interaction.",
      },
      {
        icon: "💡",
        title: "Cognitive Enhancement",
        description: "AI-powered tools to boost memory, focus, and problem-solving abilities.",
      },
      {
        icon: "😊",
        title: "Emotional Intelligence",
        description: "Advanced algorithms to understand and regulate emotional states.",
      },
      { icon: "💬", title: "Thought-to-Text", description: "Convert thoughts directly into written or spoken language." },
    ]
  
    return (
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  