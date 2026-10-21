
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "Campus Management System",
    category: "Full-Stack Web Application",
    description:
      "A campus management platform designed to organize student records, attendance, announcements, and administrative activities. Includes CRUD operations, authentication, dashboard views, and API integration.",
    stack: ["React.js", "Node.js", "Express.js", "Database", "REST APIs"],
    number: "01",
    github: "https://github.com/Vaibhav14k/campus-recruitment-system",
    demo: "",
  },
  {
    title: "YouTube-to-MP3 Converter",
    category: "Web Application",
    description:
      "A web application built during my web development internship, with an EJS interface, Node.js backend, external API integration, sign-up and sign-in flows, and a three-download guest limit.",
    stack: ["Node.js", "Express.js", "EJS", "RapidAPI", "Authentication"],
    number: "02",
    github: "https://github.com/Vaibhav14k/Video-to-Audio-Converter",
    demo: "",
  },
  {
    title: "Appointment Board",
    category: "Full-Stack Web Application",
    description:
      "An appointment management interface for creating, viewing, and updating appointments through a React frontend connected to backend APIs.",
    stack: ["React.js", "JavaScript", "REST APIs", "Node.js", "MongoDB"],
    number: "03",
    github: "https://github.com/Vaibhav14k/Appointment-Board",
    demo: "",
  },
  {
    title: "SmartAgri Dashboard",
    category: "Agriculture & Data Visualization",
    description:
      "A dashboard for recording crop activities such as sowing, irrigation, fertilization, and harvesting, alongside farm tasks and financial records.",
    stack: ["EJS", "Tailwind CSS", "MongoDB", "Mongoose", "Chart.js"],
    number: "04",
    github: "https://github.com/Vaibhav14k/Smart-Agricultural-Management-Platform-",
    demo: "",
  },
  {
    title: "Real-Time Chess Game",
    category: "Real-Time Web Application",
    description:
      "A multiplayer chess application featuring real-time move synchronization, chess rules validation, player turns, and server-managed game state.",
    stack: ["Node.js", "Express.js", "WebSockets", "Chess.js"],
    number: "05",
    github: "https://github.com/Vaibhav14k/Chess-game",
    demo: "",
  },
  {
    title: "Driver Drowsiness Detection",
    category: "IoT & Computer Vision",
    description:
      "An alert system using eye monitoring and computer vision to identify signs of driver drowsiness, with an ESP32-CAM and hardware-based alerts. Recognized in a college project competition.",
    stack: ["Python", "OpenCV", "Dlib", "ESP32-CAM", "IoT"],
    number: "06",
    github: "https://github.com/Vaibhav14k/Driver-Drowsiness-Detection-and-Alert-System-using-AI-and-IoT ",
    demo: "",
  },
];

function ProjectLink({ href, children, label }) {
  if (!href) {
    return (
      <span
        title="Add your project URL in Projects.jsx"
        className="inline-flex cursor-not-allowed items-center gap-2 text-sm text-gray-600"
        aria-label={`${label} link not configured`}
      >
        {children}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 text-sm text-gray-300 transition hover:text-violet-300"
    >
      {children}
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-wrap py-24">
      <div className="mb-10">
        <p className="text-sm font-semibold tracking-widest text-violet-300 uppercase">
          Selected work
        </p>
        <h2 className="mt-3 text-3xl font-bold sm:text-5xl">
          Projects that <span className="gradient-text">solve problems.</span>
        </h2>
        <p className="mt-4 max-w-2xl leading-7 text-gray-400">
          A mix of web applications and engineering projects that reflect
          my interest in software development and practical problem-solving.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -5 }}
            className="glass-card flex flex-col p-6 sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="text-xs tracking-[0.2em] text-violet-300">
                PROJECT / {project.number}
              </span>
              <span className="text-xs text-gray-500">{project.category}</span>
            </div>

            <h3 className="mt-7 text-2xl font-bold">{project.title}</h3>
            <p className="mt-4 flex-1 leading-7 text-gray-400">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-white/[0.06] px-3 py-1.5 text-xs text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-7 flex gap-5 border-t border-white/10 pt-5">
              <ProjectLink href={project.github} label="GitHub">
                <FiGithub /> Source code
              </ProjectLink>
              <ProjectLink href={project.demo} label="Live demo">
                <FiExternalLink /> Live demo
              </ProjectLink>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
