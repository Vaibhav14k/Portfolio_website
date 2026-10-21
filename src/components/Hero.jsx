
import { motion } from "framer-motion";
import { FiArrowDownRight, FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";
import Scene3D from "./Scene3D";

export default function Hero() {
  return (
    <section
      id="home"
      className="section-wrap grid min-h-screen items-center gap-4 pt-28 pb-16 lg:grid-cols-2"
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="mb-5 flex items-center gap-2 text-sm text-violet-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          2026 Graduate · Open to Opportunities
        </p>

        <h1 className="text-5xl leading-[1.08] font-black tracking-tight sm:text-7xl">
          Hi, I'm
          <br />
          <span className="gradient-text">Vaibhav Kangane.</span>
        </h1>

        <h2 className="mt-6 text-xl font-semibold text-gray-200 sm:text-2xl">
          Aspiring Software Developer
        </h2>

        <p className="mt-5 max-w-xl leading-7 text-gray-400">
          An Electronics and Telecommunication Engineering graduate
          focused on building responsive web applications, useful APIs,
          and full-stack software solutions with modern technologies.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-6 py-3 font-semibold transition hover:bg-violet-400"
          >
            Explore projects <FiArrowDownRight />
          </a>

          <a
            href="/resume.pdf"
            download="Vaibhav-Kangane-Resume.pdf"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 transition hover:border-violet-400"
            >
            <FiDownload />
            Download Resume
            </a>
        </div>

        <div className="mt-8 flex gap-5 text-2xl text-gray-400">
          <a
            href=" https://github.com/Vaibhav14k"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-white"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/vaibhav-kangane/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-white"
          >
            <FiLinkedin />
          </a>
        </div>
      </motion.div>

    <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    className="relative flex flex-col items-center justify-center"
    >
    <div className="absolute h-64 w-64 rounded-full bg-violet-500/20 blur-3xl sm:h-80 sm:w-80" />

    <div className="relative rounded-full  from-violet-400 via-indigo-500 to-cyan-300 p-[3px] shadow-2xl shadow-violet-500/20">
        <img
        src="/profile.png"
        alt="Vaibhav Kangane"
        className="h-64 w-64 rounded-full border-4 border-[#080910] object-cover sm:h-80 sm:w-80"
        />
    </div>

    <div className="glass-card relative mt-6 px-5 py-3 text-center">
        <p className="font-semibold">Vaibhav Kangane</p>
        <p className="mt-1 text-sm text-gray-400">
        Software Developer · 2026 Graduate
        </p>
    </div>
    </motion.div>

    </section>
  );
}
