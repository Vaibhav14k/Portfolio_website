
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#080910]/85 backdrop-blur-xl">
      <nav className="section-wrap flex h-[72px] items-center justify-between">
        <a href="#home" className="text-xl font-black tracking-tight">
          VK<span className="text-violet-400">.</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm text-gray-400 transition hover:text-white"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-violet-400/50 px-5 py-2 text-sm hover:bg-violet-400/10"
          >
            Let's talk
          </a>
        </div>

        <button
          className="p-2 text-xl md:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#0b0c16] p-5 md:hidden">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="block py-3 text-gray-300 hover:text-violet-300"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
