"use client"

import * as React from "react"
import Link from "next/link"
import { ChevronDown } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const projects = [
  { name: "All Projects", href: "/projects" },
  { name: "Web Development", href: "/projects/web-development" },
  { name: "Mobile Apps", href: "/projects/mobile-apps" },
  { name: "UI/UX Design", href: "/projects/ui-ux-design" },
]

export function ProjectsDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-full justify-start font-normal">
          Projects
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        {projects.map((project) => (
          <DropdownMenuItem key={project.name} asChild>
            <Link
              href={project.href}
              className="w-full cursor-pointer"
            >
              {project.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

