
import { FiArrowUp } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="section-wrap flex flex-col items-center justify-between gap-4 py-7 text-sm text-gray-500 sm:flex-row">
        <p>
          © {new Date().getFullYear()} Vaibhav Kangane.
        </p>
        <a
          href="#home"
          className="inline-flex items-center gap-2 transition hover:text-white"
        >
          Back to top <FiArrowUp />
        </a>
      </div>
    </footer>
  );
}
