import Hero from "@/components/sections/Hero";
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Contact from "@/components/sections/Contact";
import Preloader from "@/components/elements/Preloader";


export default function Home() {
  return (
    <main className="flex flex-col">
      <Preloader />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}
