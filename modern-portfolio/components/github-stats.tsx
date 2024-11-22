import { Users, GitFork } from 'lucide-react'

interface GithubStatsProps {
  followers: number | undefined
  repos: number | undefined
}

export function GithubStats({ followers, repos }: GithubStatsProps) {
  return (
    <div className="flex justify-center gap-4">
      <div className="flex items-center gap-2">
        <Users className="h-5 w-5 text-purple-500" />
        <span>{followers !== undefined ? `${followers} followers` : 'Loading...'}</span>
      </div>
      <div className="flex items-center gap-2">
        <GitFork className="h-5 w-5 text-purple-500" />
        <span>{repos !== undefined ? `${repos} public repos` : 'Loading...'}</span>
      </div>
    </div>
  )
}

