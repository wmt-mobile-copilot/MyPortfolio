"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search } from 'lucide-react'

export function NavBar() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center justify-between py-4 px-6">
      <Link href="/" className="text-lg font-medium hover:text-primary transition-colors">
        Tushar Pankhaniya
      </Link>
      <div className="flex items-center gap-6">
        <Link 
          href="/about" 
          className={`hover:text-primary transition-colors ${pathname === '/about' ? 'text-primary' : ''}`}
        >
          About
        </Link>
        <Link 
          href="/projects"
          className={`hover:text-primary transition-colors ${pathname === '/projects' ? 'text-primary' : ''}`}
        >
          Projects
        </Link>
        <button className="hover:text-primary transition-colors">
          <Search className="h-5 w-5" />
        </button>
      </div>
    </nav>
  )
}

