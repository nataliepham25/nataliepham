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
      title: "React Portfolio Version 1",
      description:
        "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Lifting App",
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Portfolio Version 2",
      description: "A responsive weather dashboard with location-based forecasts and interactive charts.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React", "Chart.js", "OpenWeather API"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Monsters Rolodex App",
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
      company: "iDASH360, Inc.",
      position: "Software Engineer",
      duration: "2024 - Present",
      description: [
        "Implemented Cypress Testing on controllers to identify and mitigate UI bugs prior to production release, increasing user satisfaction rates by 7%",
        "Developed a dynamic PowerPoint generation tool using Next.js, TypeScript, and Supabase (PostgreSQL), enabling users to import data via CSV, Excel, API, or manual entry with full CRUD functionality",
        "Integrated custom and prebuilt PowerPoint templates with interactive UI elements, allowing users to visually define chart/table placement areas",
        "Spearheaded user research and stakeholder interviews to shape feature requirements and prioritize roadmap, directly influencing sprint planning and backlog refinement sessions"
      ],
      technologies: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Cypress"],
    },
    {
      company: "SAP",
      position: "Software Engineer Intern",
      duration: "2021 - 2023",
      description: [
        "Developed a full-stack feature that uses React, JavaScript, Java, and Oracle DBMS to enable customers to modify sales claims on their accounts, while analyzing customer interaction to identify usage patterns, driving a 7% increase in engagement.",
        "Partnered with design, PM, and engineering teams to define product specs through user research and analytics, streamlining dev cycles by 15%.",
        "Collaborated with Product Manager and Lead UX Designer to prototype and design features for SAP Eureka Cloud Services based on user feedback resulting in a 20% increase in task completion rates.",
        "Developed a frontend feature using JavaScript and React, linked to the backend SAP Cloud Service with Java to allow SAP customers to see their service costs."
      ],
      technologies: ["React", "JavaScript", "CSS3", "Oracle"],
    },
    {
      company: "DocuSign",
      position: "Software Engineer Intern",
      duration: "May 2022 - August 2022",
      description:[
        "Collaborated with UX designers to develop a front-end component using TypeScript and React, enhancing accessibility by providing inline status messages on DocuSign's main webpage.",
        "Developed personas, user journey maps, wireframe, and internationalized DocuSign Forms component, enabling cross-platform compatibility (mobile/web, dark/light modes) in 10+ languages."
      ],
      technologies: ["HTML5", "CSS3", "TypeScript", "React"],
    },
        {
      company: "Amazon Web Services",
      position: "Software Development Engineer Intern",
      duration: "June 2021 - August 2021",
       description:[
        "Created frontend features using JavaScript, React, Redux, HTML5/CSS3 to improve cloud resource management experience for AWS customers by decreasing the render time by 7%.",
        "Worked on backend functions using Python and Ruby to update metrics created from CloudWatch Synthetics."
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Redux", "Python", "Ruby"],
    },
        {
      company: "Intel Corporation",
      position: "Software Engineer Intern",
      duration: "January 2021 - May 2021",
      description:[
        "Built two different web applications using C# and Python to optimize and seamlessly extract large data and perform software/data analysis for 4 different teams to use.",
        "Helped engineers in performing software tests, debugging issues, and developing software test content, and improving test infrastructure that reached thousands of users" 

      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP"],
    },
    {
      company: "NASA",
      position: "Computer Engineer Intern",
      duration: "August 2020 - December 2020",
      description:
        "Worked on systems engineering and collaborated with NASA scientists to create an automated system that detects anomalies in satellite imagery, reducing false positives by 30%.",
      technologies: ["HTML5", "CSS3", "Java"],
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
                hello! i am a passionate software engineer with a strong background in web development. i have passions and experience in machine learning and product managememt. i have worked on many different projects cross-functionally and defined product requirements for new features to stakeholders. 
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                when i am not coding, you can find me exploring new technologies, exploring new cafes, making matcha/coffee content, and mindlessly scrolling through twitter. 
              </p>
            </div>
          </section>

          {/* Projects Section
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
          </section> */}

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
                  <h3 className="text-xl font-semibold text-white mb-4">let's work together</h3>
                  <p className="text-gray-300 mb-6">
                    i am always interested in new opportunities and exciting projects. feel free to reach out if you'd
                    like to collaborate!
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">natalieqpham5@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">new york, ny</span>
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
