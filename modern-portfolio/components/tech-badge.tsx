import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface TechBadgeProps {
  name: string
  className?: string
}

export function TechBadge({ name, className }: TechBadgeProps) {
  return (
    <Badge 
      variant="secondary" 
      className={cn(
        "bg-purple-500/10 hover:bg-purple-500/20 text-purple-500 transition-colors",
        className
      )}
    >
      {name}
    </Badge>
  )
}

