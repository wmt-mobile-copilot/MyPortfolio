import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface FeaturedCardProps {
  title: string
  description: string
  link: string
  icon: React.ReactNode
}

export function FeaturedCard({ title, description, link, icon }: FeaturedCardProps) {
  return (
    <Link href={link}>
      <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {icon}
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{description}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  )
}

