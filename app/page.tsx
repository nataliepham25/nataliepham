import { Sidebar } from "@/components/sidebar"
import { HeroSection } from "@/components/hero-section"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { ExperienceCard } from "@/components/experience-card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard with location-based forecasts and interactive charts.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React", "Chart.js", "OpenWeather API"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Social Media App",
      description: "A social media platform with real-time messaging, post sharing, and user authentication.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Next.js", "Socket.io", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills with modern design.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Blog Platform",
      description: "A content management system for bloggers with markdown support and SEO optimization.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Gatsby", "GraphQL", "Contentful"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  const skills = [
    { name: "JavaScript", level: 95 },
    { name: "React", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Python", level: 80 },
    { name: "TypeScript", level: 88 },
    { name: "MongoDB", level: 75 },
    { name: "PostgreSQL", level: 70 },
    { name: "AWS", level: 65 },
  ]

  const experiences = [
    {
      company: "Tech Innovations Inc.",
      position: "Senior Full Stack Developer",
      duration: "2022 - Present",
      description:
        "Led development of multiple web applications, mentored junior developers, and implemented best practices for code quality and performance.",
      technologies: ["React", "Node.js", "AWS", "MongoDB"],
    },
    {
      company: "Digital Solutions Ltd.",
      position: "Frontend Developer",
      duration: "2020 - 2022",
      description:
        "Developed responsive web applications, collaborated with design teams, and optimized application performance.",
      technologies: ["Vue.js", "JavaScript", "CSS3", "Firebase"],
    },
    {
      company: "StartupXYZ",
      position: "Junior Developer",
      duration: "2019 - 2020",
      description:
        "Built and maintained web applications, participated in code reviews, and learned modern development practices.",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP"],
    },
  ]

  return (
    <div className="flex h-screen bg-gray-950">
      <Sidebar />

      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          {/* Hero Section */}
          <section id="home">
            <HeroSection />
          </section>

          {/* About Section */}
          <section id="about" className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
            <div className="bg-gray-900 rounded-lg p-6 mb-8">
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                I'm a passionate full-stack developer with over 5 years of experience creating digital solutions that
                make a difference. I specialize in modern web technologies and love turning complex problems into
                simple, beautiful designs.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing my knowledge through blog posts and mentoring.
              </p>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                View All Projects
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Skills & Technologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <SkillBadge key={index} {...skill} />
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section id="resume" className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Work Experience</h2>
            <div className="space-y-6">
              {experiences.map((experience, index) => (
                <ExperienceCard key={index} {...experience} />
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
            <div className="bg-gray-900 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Let's work together</h3>
                  <p className="text-gray-300 mb-6">
                    I'm always interested in new opportunities and exciting projects. Feel free to reach out if you'd
                    like to collaborate!
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">john.doe@example.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">San Francisco, CA</span>
                    </div>
                  </div>
                </div>
                <div>
                  <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-3 rounded-full w-full">
                    Send Message
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
