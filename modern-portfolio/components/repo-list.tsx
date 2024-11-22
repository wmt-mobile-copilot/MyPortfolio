import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from 'lucide-react'

interface Repo {
  name: string
  description: string | null
  html_url: string
  stargazers_count: number
  language: string | null
}

interface RepoListProps {
  repos: Repo[] | undefined
}

export function RepoList({ repos }: RepoListProps) {
  if (!repos) {
    return <div>Loading repositories...</div>
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Latest Projects</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {repos.map((repo) => (
          <Card key={repo.name} className="bg-purple-500/5 border-purple-500/10">
            <CardHeader>
              <CardTitle>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                  {repo.name}
                </a>
              </CardTitle>
              <CardDescription>{repo.description || 'No description available'}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 mr-1" />
                  <span>{repo.stargazers_count}</span>
                </div>
                {repo.language && (
                  <Badge variant="secondary" className="bg-purple-500/10 text-purple-500">
                    {repo.language}
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

