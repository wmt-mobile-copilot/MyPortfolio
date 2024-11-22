import { NavBar } from "@/components/nav-bar"
import { ProjectCard } from "@/components/project-card"

const projects = [
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
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website showcasing projects and skills",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "Tailwind CSS", "Vercel"],
    liveLink: "https://your-portfolio.com",
    githubLink: "https://github.com/yourusername/portfolio"
  }
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <NavBar />
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
          My Projects
        </h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </main>
    </div>
  )
}

