function Contact() {
  const contactInfo = [
    {
      label: "Email",
      value: "aswinchandran6649@gmail.com",
      href: "mailto:aswinchandran6649@gmail.com",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      label: "GitHub",
      value: "aswin-chandran",
      href: "https://github.com/Aswinchandran-6649",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      label: "Phone",
      value: "+91 9544036649",
      href: "tel:+919544036649",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      value: "in/aswin-chandran",
      href: "https://www.linkedin.com/in/aswin-chandran6649",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="px-6 py-24 bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          {/* Left: Text Content */}
          <div className="flex-1">
            <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] drop-shadow-[6px_6px_0px_var(--color-border)] overflow-hidden">
              <span className="block animate-slideUp">Let's</span>
              <span className="bg-[var(--color-accent)] text-[var(--color-bg)] px-4 py-2 border-4 border-[var(--color-border)] inline-block mt-4 animate-slideUp [animation-delay:0.2s] hover:animate-float">
                Connect.
              </span>
            </h2>
            <p className="text-xl md:text-2xl font-bold uppercase max-w-xl leading-tight mt-6">
              MERN Stack Developer based in Kerala. <br />
              Available for remote collaborations and technical challenges.
            </p>
          </div>

          {/* Right: Your Photo */}
          <div className="flex-shrink-0">
            <div className="w-48 h-48 md:w-64 md:h-64 border-[6px] border-[var(--color-border)] shadow-[8px_8px_0px_var(--color-border)] overflow-hidden bg-[var(--color-accent)] rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src="./aswinnn.png"
                alt="Aswin Chandran"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {contactInfo.map((info) => (
            <a
              key={info.label}
              href={info.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-[var(--color-bg)] border-4 border-[var(--color-border)] p-4 md:p-6 transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_var(--color-border)] shadow-[4px_4px_0px_var(--color-border)] flex flex-col justify-between h-[160px] md:h-[200px]"
            >
              <div className="p-2 md:p-3 border-4 border-[var(--color-border)] bg-[var(--color-bg)] w-fit group-hover:bg-[var(--color-text)] group-hover:text-[var(--color-bg)] transition-colors">
                {info.icon}
              </div>

              <div>
                <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest bg-[var(--color-text)] text-[var(--color-bg)] px-2 py-0.5 mb-2 inline-block">
                  {info.label}
                </span>
                <p className="text-[10px] md:text-sm font-black break-all leading-tight uppercase">
                  {info.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-20 border-8 border-[var(--color-border)] p-6 bg-[var(--color-bg)] flex flex-col md:flex-row items-center justify-between gap-6 shadow-[12px_12px_0px_var(--color-accent)]">
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 bg-[var(--color-accent)] border-4 border-[var(--color-border)] animate-bounce"></div>
            <p className="text-xl md:text-2xl font-black uppercase italic">
              Active for recruitment
            </p>
          </div>
          <p className="text-lg font-bold uppercase tracking-tighter">
            Kerala, IN
          </p>
        </div>

        <footer className="mt-24 pt-8 border-t-4 border-[var(--color-border)] text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-50">
            © {new Date().getFullYear()} ASWIN CHANDRAN. BUILT WITH REACT.
          </p>
        </footer>
      </div>
    </section>
  );
}

export default Contact;
