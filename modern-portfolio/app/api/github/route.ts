import { NextResponse } from 'next/server'

const GITHUB_API_URL = 'https://api.github.com/users/tushar-2223'

export async function GET() {
  try {
    const response = await fetch(GITHUB_API_URL)
    if (!response.ok) {
      throw new Error('Failed to fetch GitHub data')
    }
    const data = await response.json()

    // Fetch repositories
    const reposResponse = await fetch(`${GITHUB_API_URL}/repos?sort=updated&per_page=5`)
    if (!reposResponse.ok) {
      throw new Error('Failed to fetch repositories')
    }
    const repos = await reposResponse.json()

    return NextResponse.json({
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
    })
  } catch (error) {
    console.error('Error fetching GitHub data:', error)
    return NextResponse.json({ error: 'Failed to fetch GitHub data' }, { status: 500 })
  }
}

