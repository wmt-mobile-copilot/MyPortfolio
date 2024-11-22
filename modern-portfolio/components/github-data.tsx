import Image from "next/image"
import { NavBar } from "@/components/nav-bar"
import { SocialLinks } from "@/components/social-links"
import { TechBadge } from "@/components/tech-badge"
import { GithubStats } from "@/components/github-stats"
import { RepoList } from "@/components/repo-list"

const technologies = [
  "TypeScript",
  "React Native",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Firebase",
  "JWT",
  "TailwindCSS",
  "Figma"
]

const learning = ["Flutter"]

const GITHUB_API_URL = 'https://api.github.com/users/tushar-2223'

async function getGithubData() {
  try {
    const response = await fetch(GITHUB_API_URL, { next: { revalidate: 3600 } })
    if (!response.ok) {
      throw new Error('Failed to fetch GitHub data')
    }
    const data = await response.json()

    // Fetch repositories
    const reposResponse = await fetch(`${GITHUB_API_URL}/repos?sort=updated&per_page=5`, { next: { revalidate: 3600 } })
    if (!reposResponse.ok) {
      throw new Error('Failed to fetch repositories')
    }
    const repos = await reposResponse.json()

    return {
      name: data.name,
      bio: data.bio,
      avatar_url: data.avatar_url,
      followers: data.followers,
      public_repos: data.public_repos,
      repos: repos.map((repo: any) => ({
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        stargazers_count: repo.stargazers_count,
        language: repo.language,
      })),
    }
  } catch (error) {
    console.error('Error fetching GitHub data:', error)
    return null
  }
}

export async function GithubData() {
  const githubData = await getGithubData()

  if (!githubData) {
    return <div>Failed to load data. Please try again later.</div>
  }

  return (
    <>
      <NavBar />
      
      <main className="container mx-auto px-6 py-12 relative">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="relative w-32 h-32 mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-gradient" />
            <Image
              src={githubData.avatar_url}
              alt={githubData.name}
              width={128}
              height={128}
              className="rounded-full border-4 border-[#0a0118] relative z-10"
            />
          </div>
          
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            Hello, I'm {githubData.name} 👋
          </h1>
          
          <p className="max-w-2xl text-gray-300 mb-8">
            {githubData.bio}
          </p>
          
          <SocialLinks />
        </div>

        <div className="space-y-8">
          <GithubStats followers={githubData.followers} repos={githubData.public_repos} />

          <div>
            <h2 className="text-2xl font-semibold mb-4">Technologies and tools I use:</h2>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <TechBadge key={tech} name={tech} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Currently learning:</h2>
            <div className="flex flex-wrap gap-2">
              {learning.map((tech) => (
                <TechBadge key={tech} name={tech} className="bg-pink-500/10 hover:bg-pink-500/20 text-pink-500" />
              ))}
            </div>
          </div>

          <RepoList repos={githubData.repos} />

          <div className="bg-purple-500/5 rounded-lg p-6 border border-purple-500/10">
            <p className="text-gray-300">
              🌟 MERN Stack Developer | React Native Developer | Flutter
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

