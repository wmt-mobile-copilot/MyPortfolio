import { GithubData } from "@/components/github-data"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0118] text-white">
      <div className="absolute inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <GithubData />
    </div>
  )
}

