import { useState, useEffect } from "react";

function Navbar({ theme, setTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [dateTime, setDateTime] = useState({ time: "", date: "" });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setDateTime({
        time: now.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        date: now.toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
        }),
      });
    };

    updateTime();
    const timer = setInterval(updateTime, 60000);
    return () => clearInterval(timer);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#about" },
  ];

  const themes = [
    "neo-brutal",
    "minimal",
    "dark",
    "cyber",
    "forest",
    "sunset",
    "ink",
    "electric",
    "candy",
    "hacker",
    "blood",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] p-4 md:p-6">
      <div className="bg-[var(--color-bg)] border-4 border-[var(--color-border)] shadow-[6px_6px_0px_var(--color-border)] p-4 flex justify-between items-center transition-colors duration-300">
        {/* Branding */}
        <a href="/" className="flex flex-col leading-none">
          <span className="text-lg md:text-xl font-black uppercase tracking-tighter text-[var(--color-text)]">
            ASWIN CHANDRAN
          </span>
          <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] opacity-70">
            Full-Stack Developer
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-xs font-black uppercase tracking-widest hover:underline decoration-2 underline-offset-4 text-[var(--color-text)]"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Time & Date Display */}
          <div className="flex flex-col items-end leading-none border-l-2 border-[var(--color-border)] pl-6 text-[var(--color-text)]">
            <span className="text-[10px] font-black">{dateTime.time}</span>
            <span className="text-[8px] font-bold opacity-60 uppercase">
              {dateTime.date}
            </span>
          </div>

          {/* Theme Selector */}
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="border-2 border-[var(--color-border)] px-2 py-1 text-[10px] font-black uppercase bg-[var(--color-bg)] text-[var(--color-text)] cursor-pointer outline-none"
          >
            {themes.map((t) => (
              <option key={t} value={t}>
                {t.replace("-", " ")}
              </option>
            ))}
          </select>

          {/* Connect Button */}
          <a
            href="mailto:aswinchandran6649@gmail.com"
            className="bg-[var(--color-accent)] border-2 border-[var(--color-border)] px-4 py-1.5 text-[10px] font-black uppercase tracking-widest shadow-[3px_3px_0px_var(--color-border)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            Connect
          </a>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <div className="flex flex-col items-end leading-none text-[var(--color-text)]">
            <span className="text-[10px] font-black">{dateTime.time}</span>
            <span className="text-[8px] font-bold opacity-60 uppercase">
              {dateTime.date}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="border-2 border-[var(--color-border)] p-2 text-[var(--color-text)] bg-[var(--color-bg)] shadow-[3px_3px_0px_var(--color-border)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-2 bg-[var(--color-bg)] border-4 border-[var(--color-border)] shadow-[6px_6px_0px_var(--color-border)] p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-black uppercase border-b-2 border-[var(--color-border)] pb-2 text-[var(--color-text)] hover:pl-2 transition-all"
            >
              {link.name}
            </a>
          ))}

          <div className="mt-2">
            <label className="text-[8px] font-black uppercase mb-2 block opacity-60 text-[var(--color-text)]">
              Select Theme
            </label>
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="w-full border-2 border-[var(--color-border)] p-2 text-[10px] font-black uppercase bg-[var(--color-bg)] text-[var(--color-text)] cursor-pointer outline-none"
            >
              {themes.map((t) => (
                <option key={t} value={t}>
                  {t.replace("-", " ")}
                </option>
              ))}
            </select>
          </div>

          <a
            href="mailto:aswinchandran6649@gmail.com"
            className="w-full text-center bg-[var(--color-accent)] border-4 border-[var(--color-border)] py-3 mt-2 text-xs font-black uppercase tracking-widest shadow-[4px_4px_0px_var(--color-border)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all"
          >
            Connect
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
