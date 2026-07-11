import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-[#030712] py-8 mt-auto z-40 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Essayas Abraham. All rights reserved.
        </p>

        <div className="flex items-center justify-center space-x-4">
          <div className="w-12 md:w-24 h-px bg-slate-800"></div>
          <span className="text-emerald-500 font-mono font-bold">{"</>"}</span>
          <div className="w-12 md:w-24 h-px bg-slate-800"></div>
        </div>

        <div className="flex items-center space-x-6 text-slate-400">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white hover:scale-110 transition-all duration-300"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
