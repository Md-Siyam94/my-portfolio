import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import About from "@/pages/Home/About";
import Contact from "@/pages/Home/Contact";
import Hero from "@/pages/Home/Hero";
import Projects from "@/pages/Home/Projects";
import Skills from "@/pages/Home/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <div className="  bg-black/98 max-w-screen-2xl mx-auto font-sans text-white">
      <header>
        <Navbar></Navbar>
      </header>
      <main className=" min-h-[calc(100vh-161px)] w-full  sm:items-start">
       <section id="hero">
        <Hero></Hero>
       </section>
       <section id="about">
        <About></About>
        </section>
        <section id="skills" className="bg-white/10">
          <Skills></Skills>
        </section>
        <section id="projects" className="bg-linear-160 from-gray-900 to-black/80">
          <Projects></Projects>
          </section>
          <section id="contact">
            <Contact></Contact>
          </section>
      </main>
      <footer>
      <Footer></Footer>
      </footer>
    </div>
  );
}
