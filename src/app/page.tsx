
import Preloader from "@/components/elements/Preloader";
import Home from "@/components/sections/Home";
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";


export default function HomePage() {
  let sticky = false
  function handleInView(inView: boolean) {
    sticky = true
  }
  return (
    <main className="flex flex-col ">
      <Preloader />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
