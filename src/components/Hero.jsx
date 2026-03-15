import React, { useState, useEffect } from "react";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiFigma,
  SiJavascript,
  SiGithub,
} from "react-icons/si";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io5";
import { BsBootstrap } from "react-icons/bs";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

function Hero() {
  const [showSkills, setShowSkills] = useState(false);

  const textContent =
    "Architecting digital ecosystems with modern, robust, and clean code patterns.";
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    textContent.slice(0, latest),
  );

  useEffect(() => {
    const controls = animate(count, textContent.length, {
      type: "tween",
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 2,
    });
    return controls.stop;
  }, []);

  const skillGroups = {
    Frontend: [
      { n: "React.js", i: "⚛️" },
      { n: "Angular", i: "🅰️" },
      { n: "JavaScript", i: "JS" },
      { n: "TypeScript", i: "TS" },
      { n: "HTML5", i: "🌐" },
      { n: "CSS3", i: "🎨" },
      { n: "Tailwind CSS", i: "🌊" },
      { n: "Bootstrap", i: "🅱️" },
      { n: "Responsive UI", i: "📱" },
    ],
    Backend: [
      { n: "Node.js", i: "🟢" },
      { n: "Express.js", i: "🚂" },
      { n: "REST APIs", i: "🔗" },
      { n: "JWT Auth", i: "🔐" },
      { n: "RBAC", i: "👤" },
      { n: "MongoDB", i: "🍃" },
      { n: "Mongoose", i: "🐈" },
      { n: "MySQL", i: "🗄️" },
    ],
    "Tools & Practices": [
      { n: "Git", i: "🌿" },
      { n: "GitHub", i: "🐙" },
      { n: "Postman", i: "📮" },
      { n: "API Integration", i: "🔌" },
      { n: "Async Programming", i: "⚡" },
      { n: "Error Handling", i: "⚠️" },
      { n: "Debugging", i: "🔍" },
    ],
  };

  return (
    <section className="min-h-screen bg-[var(--color-bg)] flex flex-col font-sans text-[var(--color-text)] selection:bg-[var(--color-text)] selection:text-[var(--color-bg)] border-[6px] md:border-[12px] border-[var(--color-border)] transition-colors duration-300 pt-24 md:pt-36">
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        <div className="lg:w-7/12 flex flex-col justify-center px-6 md:px-16 py-12 border-b-[6px] lg:border-b-0 lg:border-r-[6px] border-[var(--color-border)]">
          <h1 className="text-[16vw] sm:text-[10vw] lg:text-[8vw] font-black leading-[0.85] tracking-tighter uppercase mb-10">
            BUILDING <br />
            <span className="bg-[var(--color-text)] text-[var(--color-bg)] px-3 md:px-4 inline-block transform -rotate-1 hover:rotate-0 transition-transform cursor-default">
              SCALABLE
            </span>{" "}
            <br />
            SOLUTIONS
          </h1>

          <div className="max-w-xl bg-[var(--color-bg)] border-4 border-[var(--color-border)] p-8 md:p-12 shadow-[8px_8px_0px_var(--color-border)] relative mb-8 min-h-[420px] flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-10 h-10 border-b-4 border-l-4 border-[var(--color-border)]"></div>

            {/* Main Text Content Area */}
            <div className="flex flex-col gap-6">
              <p className="text-xl md:text-3xl font-black uppercase leading-snug tracking-tighter italic">
                Full-Stack Developer
                <span className="block text-[var(--color-accent)] mt-1">
                  focused on:
                </span>
              </p>

              {/* Stable Height Typing Area */}
              <div className="h-[100px] md:h-[120px] flex items-start border-l-4 border-[var(--color-accent)] pl-4">
                <p className="text-base md:text-2xl font-bold leading-tight uppercase italic text-[var(--color-text)]/90">
                  <motion.span>{displayText}</motion.span>
                  <motion.span className="animate-pulse ml-1 text-[var(--color-accent)]">
                    |
                  </motion.span>
                </p>
              </div>
            </div>

            {/* Button container */}
            <button
              onClick={() => setShowSkills(true)}
              className="group inline-flex items-center gap-4 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] bg-[var(--color-text)] text-[var(--color-bg)] px-8 py-4 shadow-[6px_6px_0px_var(--color-accent)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all w-fit"
            >
              View Technical Stack
              <span className="text-lg transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </div>

        <div className="lg:w-5/12 bg-[var(--color-bg)] flex items-center justify-center p-8 md:p-20 relative">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(var(--color-text) 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          ></div>
          <div className="relative w-full max-w-[380px] aspect-[4/5]">
            <div className="absolute inset-0 border-[6px] border-[var(--color-border)] translate-x-4 translate-y-4 bg-[var(--color-text)] opacity-10"></div>
            <div className="relative h-full w-full border-[6px] border-[var(--color-border)] bg-[var(--color-accent)] shadow-[12px_12px_0px_var(--color-border)] overflow-hidden group transition-all duration-500 hover:shadow-none hover:translate-x-2 hover:translate-y-2">
              <img
                src="./aswin.png"
                alt="Aswin Portrait"
                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute bottom-4 left-4 bg-[var(--color-bg)] border-2 border-[var(--color-border)] px-3 py-1 text-[10px] font-black uppercase tracking-tighter">
                Dev_Core_v1.0
              </div>
            </div>
          </div>
        </div>
      </div>

      {showSkills && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[var(--color-bg)] border-[6px] border-[var(--color-border)] shadow-[12px_12px_0px_var(--color-border)] max-w-3xl w-full p-6 md:p-10 relative overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setShowSkills(false)}
              className="absolute top-4 right-4 bg-[var(--color-text)] text-[var(--color-bg)] w-10 h-10 font-black flex items-center justify-center hover:bg-[var(--color-accent)] transition-all"
            >
              ✕
            </button>
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-8 italic underline decoration-[var(--color-accent)] decoration-4">
              Technical Arsenal
            </h2>
            <div className="space-y-8">
              {Object.entries(skillGroups).map(([category, skills]) => (
                <div key={category}>
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-4 opacity-60">
                    // {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill.n}
                        className="flex items-center gap-2 border-2 border-[var(--color-border)] px-3 py-1.5 text-[10px] font-bold uppercase hover:bg-[var(--color-text)] hover:text-[var(--color-bg)] transition-colors cursor-default"
                      >
                        <span className="opacity-70">{skill.i}</span> {skill.n}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="border-t-[6px] border-[var(--color-border)] bg-[var(--color-text)] text-[var(--color-bg)] py-8 overflow-hidden">
        <div className="flex animate-[scroll_30s_linear_infinite] w-max gap-20">
          {[...Array(2)].map((_, groupIndex) => (
            <div key={groupIndex} className="flex gap-20 items-center px-10">
              <div className="flex flex-col items-center gap-2">
                <SiReact className="text-4xl" />
                <span className="text-[10px] font-black uppercase">React</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <SiNodedotjs className="text-4xl" />
                <span className="text-[10px] font-black uppercase">
                  Node.js
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <SiMongodb className="text-4xl" />
                <span className="text-[10px] font-black uppercase">
                  MongoDB
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <SiExpress className="text-4xl" />
                <span className="text-[10px] font-black uppercase">
                  Express
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <IoLogoHtml5 className="text-4xl" />
                <span className="text-[10px] font-black uppercase">HTML</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <IoLogoCss3 className="text-4xl" />
                <span className="text-[10px] font-black uppercase">CSS</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <BsBootstrap className="text-4xl" />
                <span className="text-[10px] font-black uppercase">
                  Bootstrap
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <SiTailwindcss className="text-4xl" />
                <span className="text-[10px] font-black uppercase">
                  Tailwind
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <SiJavascript className="text-4xl" />
                <span className="text-[10px] font-black uppercase">JS</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <SiFigma className="text-4xl" />
                <span className="text-[10px] font-black uppercase">Figma</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <SiGithub className="text-4xl" />
                <span className="text-[10px] font-black uppercase">GitHub</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;
