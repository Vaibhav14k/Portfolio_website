
import { motion } from "framer-motion";

const milestones = [
  {
    period: "Jan 2025 – Apr 2025",
    title: "Web Development Intern",
    company: "Vasmyrrh Technologies",
    details: [
      "Contributed to the frontend of a company website.",
      "Developed a YouTube-to-MP3 converter using Node.js, EJS, and an external API.",
      "Worked on sign-up and sign-in flows and guest usage limitations.",
    ],
  },
  {
    period: "April 2025",
    title: "Project Competition Recognition",
    company: "D. Y. Patil College of Engineering",
    details: [
      "Recognized for a Driver Drowsiness Detection and Alert System.",
      "Worked with ESP32-CAM, computer vision, and hardware alert integration.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-wrap py-24">
      <div className="mb-10">
        <p className="text-sm font-semibold tracking-widest text-violet-300 uppercase">
          Experience & achievements
        </p>
        <h2 className="mt-3 text-3xl font-bold sm:text-5xl">
          Learning by <span className="gradient-text">building.</span>
        </h2>
      </div>

      <div className="relative ml-2 space-y-6 border-l border-violet-400/30 pl-6 sm:ml-4 sm:pl-9">
        {milestones.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            className="glass-card relative p-6 sm:p-8"
          >
            <span className="absolute top-8 -left-[34px] h-4 w-4 rounded-full border-4 border-[#080910] bg-violet-400 sm:-left-[47px]" />
            <p className="text-sm text-violet-300">{item.period}</p>
            <h3 className="mt-2 text-xl font-bold">{item.title}</h3>
            <p className="mt-1 text-gray-400">{item.company}</p>

            <ul className="mt-5 list-disc space-y-2 pl-5 leading-7 text-gray-400 marker:text-violet-400">
              {item.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
