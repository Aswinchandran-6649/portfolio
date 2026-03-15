import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectList = [
    {
      id: "01",
      title: "Proofly.ai",
      desc: "AI-powered receipt management.",
      details:
        "A full-stack AI platform designed to digitize, categorize, and store receipts and warranties. Features include JWT authentication and OCR-based data extraction.",
      image: "./proofly.png",
      tech: ["React", "AI"],
      repo: "https://github.com/Aswinchandran-6649/Proofly.ai",
    },
    {
      id: "02",
      title: "MediTrack",
      desc: "Real-time medical inventory tracking.",
      details:
        "A comprehensive medical inventory management system that enables pharmacies to monitor stock levels and expiry dates in real-time.",
      image: "./meditrack.png",
      tech: ["Node.js", "MongoDB"],
      repo: "https://github.com/Aswinchandran-6649",
    },
  ];

  const getVariants = (index) => ({
    hidden: { x: index % 2 === 0 ? -100 : 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1.2, ease: [0.19, 1, 0.22, 1] },
    },
  });

  return (
    <section
      id="projects"
      className="px-6 py-32 bg-[var(--color-bg)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative mb-32 flex flex-col items-start">
          <h2 className="text-[16vw] md:text-[8rem] lg:text-[10rem] font-black uppercase leading-[0.8] tracking-tighter text-[var(--color-text)]">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Selected
            </motion.div>
            <motion.span
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-[var(--color-accent)] italic block"
            >
              Archive.
            </motion.span>
          </h2>
          <div className="mt-10 w-32 h-2 bg-[var(--color-accent)] animate-pulse"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-24 md:gap-y-48">
          {projectList.map((project, index) => (
            <motion.div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="relative group perspective cursor-pointer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={getVariants(index)}
            >
              <div className="absolute -inset-4 border-2 border-[var(--color-border)] opacity-0 group-hover:opacity-100 transition-all duration-700 -rotate-2"></div>

              <div className="relative bg-[var(--color-bg)] border-[6px] border-[var(--color-border)] p-6 md:p-12 transition-transform duration-[1200ms] group-hover:-translate-y-6">
                <div className="absolute -top-5 -left-5 bg-[var(--color-text)] text-[var(--color-bg)] px-3 py-1 font-black text-xs md:text-sm">
                  0{project.id}
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase mb-6 md:mb-8 tracking-tighter text-[var(--color-text)] break-words">
                  {project.title}
                </h3>

                <p className="text-base md:text-xl opacity-60 mb-8 md:mb-10 leading-relaxed min-h-[60px] md:min-h-[80px] text-[var(--color-text)]">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 md:gap-3 overflow-hidden">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-[10px] md:text-xs font-black uppercase border border-[var(--color-text)] text-[var(--color-text)] group-hover:bg-[var(--color-accent)] group-hover:border-[var(--color-accent)] transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-[var(--color-bg)]/90 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-[var(--color-bg)] border-[6px] border-[var(--color-border)] p-8 max-w-2xl w-full relative shadow-[12px_12px_0px_var(--color-border)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-2xl font-black text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
              >
                ✕
              </button>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover border-[4px] border-[var(--color-border)] mb-8"
              />

              <h2 className="text-4xl font-black uppercase mb-6 text-[var(--color-text)]">
                {selectedProject.title}
              </h2>
              <p className="text-lg opacity-80 mb-8 text-[var(--color-text)] leading-relaxed">
                {selectedProject.details}
              </p>

              <div className="flex gap-4">
                <a
                  href={selectedProject.repo}
                  className="px-6 py-3 border-4 border-[var(--color-border)] font-black uppercase hover:bg-[var(--color-text)] hover:text-[var(--color-bg)] transition-all"
                >
                  Source Code
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;
