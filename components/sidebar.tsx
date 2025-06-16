import Link from "next/link"
import { Home, User, Briefcase, Mail, FileText, Github, Linkedin, Twitter } from "lucide-react"

export function Sidebar() {
  return (
    <div className="w-64 bg-black text-white p-6 flex flex-col h-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-green-400">natalie pham</h1>
      </div>

      <nav className="flex-1">
        <div className="space-y-4">
          <Link href="#home" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
            <Home className="w-5 h-5" />
            <span>home</span>
          </Link>
          <Link href="#about" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
            <User className="w-5 h-5" />
            <span>about</span>
          </Link>
          <Link
            href="#projects"
            className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
          >
            <Briefcase className="w-5 h-5" />
            <span>projects</span>
          </Link>
          <Link href="#resume" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
            <FileText className="w-5 h-5" />
            <span>resume</span>
          </Link>
          <Link
            href="#contact"
            className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>contact</span>
          </Link>
        </div>
      </nav>

      <div className="mt-8 pt-6 border-t border-gray-800">
        <p className="text-gray-400 text-sm mb-4">Connect with me</p>
        <div className="flex space-x-4">
          <Link href="https://github.com/nataliepham25" className="text-gray-400 hover:text-green-400 transition-colors">
            <Github className="w-5 h-5" />
          </Link>
          <Link href="https://www.linkedin.com/in/nataliepham25/" className="text-gray-400 hover:text-green-400 transition-colors">
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link href="https://x.com/natotodoroki" className="text-gray-400 hover:text-green-400 transition-colors">
            <Twitter className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
