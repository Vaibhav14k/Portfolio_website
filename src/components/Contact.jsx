
import { FiArrowUpRight, FiMail } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="section-wrap py-24">
      <div className="glass-card relative overflow-hidden p-7 sm:p-12">
        <div className="pointer-events-none absolute -right-20 -bottom-28 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />

        <div className="relative max-w-2xl">
          <p className="text-sm font-semibold tracking-widest text-violet-300 uppercase">
            Get in touch
          </p>

          <h2 className="mt-4 text-4xl leading-tight font-black sm:text-6xl">
            Let's build something
            <br />
            <span className="gradient-text">meaningful.</span>
          </h2>

          <p className="mt-5 leading-7 text-gray-400">
            I'm interested in entry-level software development opportunities,
            frontend roles, and full-stack projects where I can keep learning
            and contribute to real products.
          </p>

          <a
            href="mailto:YOUR_EMAIL@example.com?subject=Portfolio%20Contact"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-violet-500 px-6 py-3 font-semibold transition hover:bg-violet-400"
          >
            <FiMail /> Email me <FiArrowUpRight />
          </a>
          <p className="mt-4 text-xs text-gray-500">
            vaibhavkangane1424@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
}
