
import { motion } from "framer-motion";

const groups = [
  {
    title: "Frontend Development",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Responsive UI"],
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT", "Sessions", "Multer"],
  },
  {
    title: "Database & Tools",
    skills: ["MongoDB", "Mongoose", "Git", "GitHub", "Postman", "Vercel"],
  },
  {
    title: "Programming & Core",
    skills: ["C", "C++", "JavaScript", "SQL", "DBMS", "OOP"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-wrap py-24">
      <div className="mb-10">
        <p className="text-sm font-semibold tracking-widest text-violet-300 uppercase">
          My toolkit
        </p>
        <h2 className="mt-3 text-3xl font-bold sm:text-5xl">
          Technical <span className="gradient-text">skills.</span>
        </h2>
        <p className="mt-4 max-w-xl text-gray-400">
          Technologies I use to develop interfaces, build APIs,
          and connect applications to databases.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {groups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="glass-card p-6 sm:p-7"
          >
            <h3 className="text-lg font-semibold">{group.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-gray-300 transition hover:border-violet-400/60 hover:text-violet-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
