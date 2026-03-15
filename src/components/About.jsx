import React, { useState } from "react";
import { motion } from "framer-motion";

function About() {
  const [showModal, setShowModal] = useState(false);

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="relative px-6 py-24 bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-300 border-t-[6px] border-[var(--color-border)]"
    >
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Photo + Intro */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8">
                About{" "}
                <span className="bg-[var(--color-text)] text-[var(--color-bg)] px-2">
                  Me
                </span>
              </h2>

              <div className="space-y-6 opacity-80 text-lg leading-relaxed">
                <p>
                  I am{" "}
                  <span className="font-bold border-b-2 border-[var(--color-border)]">
                    Aswin Chandran
                  </span>
                  , a BCA graduate and Full-Stack Developer with hands-on
                  experience building modern web applications using the MERN
                  stack. I completed a 6-month Full-Stack Development program at
                  Luminar Technolab, Calicut.
                </p>
                <p>
                  My key project, Proofly.ai, is an AI-powered digital receipt
                  and warranty management system. I am currently seeking
                  opportunities to contribute to real-world applications.
                </p>

                <div className="w-48 h-60 border-[6px] border-[var(--color-border)] shadow-[8px_8px_0px_var(--color-border)] overflow-hidden bg-[var(--color-accent)] mt-6">
                  <img
                    src="./aswinn.jpeg"
                    alt="Aswin Chandran"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>

              <button
                onClick={() => setShowModal(true)}
                className="mt-8 border-4 border-[var(--color-border)] px-6 py-3 font-black uppercase tracking-widest hover:bg-[var(--color-text)] hover:text-[var(--color-bg)] transition-all shadow-[4px_4px_0px_var(--color-border)]"
              >
                View Background & Languages →
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="relative border-[6px] border-[var(--color-border)] p-8 shadow-[12px_12px_0px_var(--color-border)] bg-[var(--color-bg)]">
              <h3 className="text-xl font-black uppercase mb-6 flex items-center gap-2">
                <span className="h-3 w-3 bg-[var(--color-accent)]"></span>
                Experience
              </h3>
              <div className="relative pl-6 border-l-4 border-[var(--color-border)]">
                <div className="absolute -left-[9px] top-1 h-4 w-4 bg-[var(--color-accent)]"></div>
                <h4 className="font-black uppercase">Full Stack Intern</h4>
                <p className="text-sm opacity-70">Luminar Technolab</p>
              </div>
            </div>

            <div className="relative border-[6px] border-[var(--color-border)] p-8 shadow-[12px_12px_0px_var(--color-border)] bg-[var(--color-bg)]">
              <h3 className="text-xl font-black uppercase mb-6 flex items-center gap-2">
                <span className="h-3 w-3 bg-[var(--color-text)]"></span>
                Core Competencies
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    title: "Fast Learner",
                    desc: "Quickly adapting to new frameworks and tech stacks.",
                  },
                  {
                    title: "MERN Stack",
                    desc: "Building full-stack apps with MongoDB, Express, React, Node.",
                  },
                  {
                    title: "Responsive UI",
                    desc: "Crafting mobile-first designs with Tailwind CSS.",
                  },
                  {
                    title: "Problem Solver",
                    desc: "Applying logical thinking to debug and build features.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="border-2 border-[var(--color-border)] p-4 hover:bg-[var(--color-text)] hover:text-[var(--color-bg)] transition-colors group cursor-default"
                  >
                    <h4 className="font-black uppercase text-[10px] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-[9px] opacity-70 group-hover:opacity-100 leading-tight">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[var(--color-bg)] border-[6px] border-[var(--color-border)] p-8 max-w-lg w-full shadow-[12px_12px_0px_var(--color-border)]">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-black uppercase tracking-tighter">
                Academic & Languages
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-2xl font-black hover:text-[var(--color-accent)]"
              >
                ✕
              </button>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="font-black uppercase tracking-[0.2em] opacity-60 mb-4 text-xs">
                  // Education
                </h3>

                <div className="space-y-6">
                  {/* Education */}
                  <div className="space-y-4">
                    <h3 className="font-black uppercase text-sm">Education</h3>

                    {[
                      { degree: "BCA", institution: "University of Calicut" },
                      { degree: "Plus Two", institution: "VHSS Velom" },
                      { degree: "SSLC", institution: "NHSS Vattoli" },
                    ].map((edu) => (
                      <div
                        key={edu.degree}
                        className="border-l-4 border-[var(--color-border)] pl-4"
                      >
                        <p className="font-black uppercase text-sm">
                          {edu.degree}
                        </p>
                        <p className="text-xs opacity-70">
                          {edu.institution}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Languages */}
                  <div className="space-y-4">
                    <h3 className="font-black uppercase text-sm">Languages</h3>

                    {["English", "Malayalam", "Hindi"].map((lang) => (
                      <div
                        key={lang}
                        className="border-l-4 border-[var(--color-border)] pl-4"
                      >
                        <p className="font-black uppercase text-sm">
                          {lang}
                        </p>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}

export default About;                    
