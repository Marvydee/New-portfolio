import globalStyles from "./styles";
import Cursor from "./components/Cursor";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      {/* Inject all CSS into the page */}
      <style>{globalStyles}</style>

      {/* Custom cursor (hidden on mobile — touch devices don't need it) */}
      <Cursor />

      <Nav />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
