import { NavBar } from "@/components/nav-bar"

export default function UIUXDesignProjects() {
  return (
    <div className="min-h-screen bg-[#0a0118] text-white">
      <div className="absolute inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <NavBar />
      <main className="container mx-auto px-6 py-12 relative">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
          UI/UX Design Projects
        </h1>
        {/* Add project list or grid here */}
      </main>
    </div>
  )
}

