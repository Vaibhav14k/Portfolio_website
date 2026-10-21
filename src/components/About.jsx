
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section-wrap py-24">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm font-semibold tracking-widest text-violet-300 uppercase">
          A little about me
        </p>
        <h2 className="mt-3 text-3xl font-bold sm:text-5xl">
          Engineering meets <span className="gradient-text">software.</span>
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-[1.5fr_1fr]">
          <div className="glass-card p-7 sm:p-9">
            <h3 className="text-xl font-semibold">My journey</h3>
            <p className="mt-4 leading-8 text-gray-400">
              I am a 2026 B.E. graduate in Electronics and
              Telecommunication Engineering from D. Y. Patil College
              of Engineering, Akurdi, Pune. I enjoy solving problems
              and turning ideas into practical software applications.
            </p>
            <p className="mt-4 leading-8 text-gray-400">
              Through web development projects and internship experience,
              I have worked with frontend interfaces, backend logic,
              REST APIs, and database integration. I am looking to
              grow as a software developer and contribute to a team
              building real-world products.
            </p>
          </div>

          <div className="glass-card flex flex-col justify-center gap-6 p-7">
            <div>
              <p className="text-sm text-gray-500">Education</p>
              <p className="mt-1 font-semibold">B.E. — ENTC</p>
              <p className="mt-1 text-sm text-gray-400">
                D. Y. Patil College of Engineering, Akurdi
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Graduation</p>
              <p className="mt-1 font-semibold">2026 Batch</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Academic score</p>
              <p className="mt-1 font-semibold">CGPA: 8.8 / 10</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Career focus</p>
              <p className="mt-1 font-semibold">
                Software & Full-Stack Development
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
