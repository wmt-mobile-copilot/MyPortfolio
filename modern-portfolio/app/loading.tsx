import { NavBar } from "@/components/nav-bar"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0a0118] text-white">
      <div className="absolute inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <NavBar />
      
      <main className="container mx-auto px-6 py-12 relative">
        <div className="flex flex-col items-center text-center mb-16">
          <Skeleton className="w-32 h-32 rounded-full mb-6" />
          <Skeleton className="h-10 w-64 mb-4" />
          <Skeleton className="h-4 w-full max-w-2xl mb-8" />
          <Skeleton className="h-10 w-48" />
        </div>

        <div className="space-y-8">
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-64 w-full" />
        </div>
      </main>
    </div>
  )
}

