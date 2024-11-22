import { ProjectCard } from "@/components/project-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const featuredProjects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and MongoDB",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    liveLink: "https://example-ecommerce.com",
    githubLink: "https://github.com/yourusername/ecommerce-platform"
  },
  {
    title: "Weather App",
    description: "Real-time weather application using OpenWeatherMap API",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "API Integration", "Tailwind CSS"],
    liveLink: "https://weather-app-example.com",
    githubLink: "https://github.com/yourusername/weather-app"
  },
  {
    title: "Task Management System",
    description: "A Trello-like task management system with drag-and-drop functionality",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Vue.js", "Vuex", "Node.js", "PostgreSQL"],
    liveLink: "https://task-management-example.com",
    githubLink: "https://github.com/yourusername/task-management"
  }
]

export function ProjectSession() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
        Featured Projects
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
      <div className="text-center">
        <Button asChild>
          <Link href="/projects">View All Projects</Link>
        </Button>
      </div>
    </section>
  )
}

