import { Card } from "@/components/ui/card"

interface ExperienceCardProps {
  company: string
  position: string
  duration: string
  description: string | string []
  technologies: string[]
}

export function ExperienceCard({ company, position, duration, description, technologies }: ExperienceCardProps) {
  return (
    <Card className="bg-gray-900 border-gray-800 p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-white font-semibold text-lg">{position}</h3>
          <p className="text-green-400 font-medium">{company}</p>
        </div>
        <span className="text-gray-400 text-sm">{duration}</span>
      </div>
      <div className="text-gray-300 mb-4">
        {Array.isArray(description) ? (
          <ul className="list-disc list-inside space-y-2">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{description}</p>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span key={index} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
            {tech}
          </span>
        ))}
      </div>
    </Card>
  )
}
