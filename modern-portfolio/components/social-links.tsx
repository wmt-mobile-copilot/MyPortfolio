import { Github, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function SocialLinks() {
  return (
    <div className="flex gap-2">
      <Button variant="ghost" size="icon" className="hover:bg-purple-500/10" asChild>
        <a href="https://instagram.com/tusharjp9" target="_blank" rel="noopener noreferrer">
          <Instagram className="h-5 w-5" />
          <span className="sr-only">Instagram</span>
        </a>
      </Button>
      <Button variant="ghost" size="icon" className="hover:bg-purple-500/10" asChild>
        <a href="https://youtube.com/@tusharjp9" target="_blank" rel="noopener noreferrer">
          <Youtube className="h-5 w-5" />
          <span className="sr-only">YouTube</span>
        </a>
      </Button>
      <Button variant="ghost" size="icon" className="hover:bg-purple-500/10" asChild>
        <a href="https://twitter.com/tusharjp9" target="_blank" rel="noopener noreferrer">
          <Twitter className="h-5 w-5" />
          <span className="sr-only">Twitter</span>
        </a>
      </Button>
      <Button variant="ghost" size="icon" className="hover:bg-purple-500/10" asChild>
        <a href="https://github.com/tushar-2223" target="_blank" rel="noopener noreferrer">
          <Github className="h-5 w-5" />
          <span className="sr-only">GitHub</span>
        </a>
      </Button>
      <Button variant="ghost" size="icon" className="hover:bg-purple-500/10" asChild>
        <a href="https://linkedin.com/in/tushar2223" target="_blank" rel="noopener noreferrer">
          <Linkedin className="h-5 w-5" />
          <span className="sr-only">LinkedIn</span>
        </a>
      </Button>
    </div>
  )
}

