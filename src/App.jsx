import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { BiSolidUpArrow } from "react-icons/bi";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("neo-brutal");
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) setShowTopBtn(true);
      else setShowTopBtn(false);
    });
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div
      className={`theme-${theme} min-h-screen transition-colors duration-300 relative`}
    >
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <About />
      <Projects />
      <Contact />

      <a
        href="https://wa.me/9544036649"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 bg-[#25D366] p-4 border-4 border-[var(--color-border)] shadow-[6px_6px_0px_var(--color-border)] hover:-translate-y-1 transition-transform"
      >
        <span className="text-2xl">
          <FaWhatsapp />
        </span>
      </a>

      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-[var(--color-accent)] p-4 border-4 border-[var(--color-border)] shadow-[6px_6px_0px_var(--color-border)] hover:-translate-y-1 transition-transform font-black"
        >
          <BiSolidUpArrow />
        </button>
      )}
    </div>
  );
}

export default App;
