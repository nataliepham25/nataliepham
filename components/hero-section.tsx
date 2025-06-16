import { Button } from "@/components/ui/button"
import { Play, Download } from "lucide-react"

export function HeroSection() {
  return (
    <div className="relative bg-gradient-to-b from-green-900 to-gray-900 p-8 rounded-lg mb-8">
      <div className="flex items-end space-x-6">
        <div className="w-48 h-48 bg-gradient-to-br from-green-400 to-green-600 rounded-lg shadow-2xl flex items-center justify-center">
          <span className="text-6xl font-bold text-white">JD</span>
        </div>
        <div className="flex-1">
          <p className="text-sm text-gray-300 mb-2">PORTFOLIO</p>
          <h1 className="text-6xl font-bold text-white mb-4">John Doe</h1>
          <p className="text-gray-300 text-lg mb-6">Full Stack Developer & UI/UX Designer</p>
          <div className="flex items-center space-x-4">
            <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-3 rounded-full">
              <Play className="w-5 h-5 mr-2" />
              View Projects
            </Button>
            <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800 px-6 py-3 rounded-full">
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
