import { Card } from "@/components/ui/card"
import { Play, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}

export function ProjectCard({ title, description, image, technologies, liveUrl, githubUrl }: ProjectCardProps) {
  return (
    <Card className="bg-gray-900 border-gray-800 hover:bg-gray-800 transition-all duration-300 group cursor-pointer">
      <div className="p-4">
        <div className="relative mb-4">
          <img src={image || "/placeholder.svg"} alt={title} className="w-full h-48 object-cover rounded-lg" />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-lg flex items-center justify-center">
            <Button
              size="icon"
              className="bg-green-500 hover:bg-green-600 text-black rounded-full w-12 h-12 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100"
            >
              <Play className="w-6 h-6" />
            </Button>
          </div>
        </div>
        <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-3 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-gray-800 text-gray-300 px-2 py-1 rounded-full text-xs">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-2">
          {liveUrl && (
            <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
              <ExternalLink className="w-4 h-4 mr-1" />
              Live
            </Button>
          )}
          {githubUrl && (
            <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
              <Github className="w-4 h-4 mr-1" />
              Code
            </Button>
          )}
        </div>
      </div>
    </Card>
  )
}
