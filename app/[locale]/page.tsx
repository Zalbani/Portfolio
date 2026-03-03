import { Sidebar } from '@/components/layout/Sidebar'
import { About } from '@/components/sections/About'
import { Experience } from '@/components/sections/Experience'
import { Projects } from '@/components/sections/Projects'
import { Skills } from '@/components/sections/Skills'
import { Education } from '@/components/sections/Education'
import { MobileNav } from '@/components/layout/MobileNav'

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <MobileNav />

      <div className="lg:flex lg:gap-0 max-w-6xl mx-auto">
        <div className="hidden lg:block w-[42%] flex-none">
          <Sidebar />
        </div>

        <main className="lg:w-[58%] px-6 lg:px-16 pt-8 lg:pt-0 pb-28 lg:pb-0">
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Education />
        </main>
      </div>
    </div>
  )
}
