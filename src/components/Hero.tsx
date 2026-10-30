

import nyinyiaung from "../assets/images/nyinyiaung1.png";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-[#050B16] px-5 pb-8 pt-28 text-white sm:px-8 
    lg:px-12 lg:pt-32 scroll-mt-24 ...">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
        <div className="relative z-10 order-2 space-y-5 lg:order-1">
          <p className="text-lg font-medium text-gray-300 sm:text-xl">Hello, I'm</p>

          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            Nyi Nyi <span className="text-blue-500">Aung</span>
          </h1>

          <h2 className="text-2xl font-bold text-gray-300 sm:text-3xl">Frontend Developer</h2>

          <p className="max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
            I build modern, responsive and user-friendly web applications
            using React, TypeScript and Tailwind CSS.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a href="#projects" 
            className="inline-flex items-center rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-600">
              View My Projects
            </a>

            <a href="/James_Roben_Frontend_Developer_CV_PDF.pdf" download 
            className="inline-flex items-center rounded-lg border border-white/15 px-6 py-3 font-semibold text-gray-200 
            transition hover:border-blue-400 hover:text-blue-400">
              Download CV
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-5 pt-3 text-sm text-gray-300">
            <a href="https://github.com/" aria-label="GitHub" 
            className="flex flex-col items-center gap-2 transition hover:text-blue-400">
              <FaGithub size={35} className="border w-auto rounded-lg p-[5px] text-white transition hover:text-blue-400"/>
              GitHub
            </a>

            <a href="https://linkedin.com/" aria-label="LinkedIn" 
            className="flex flex-col items-center gap-2 transition hover:text-blue-400">
              <FaLinkedinIn size={35} className="border w-auto rounded-lg p-[5px] text-white transition hover:text-blue-400"/>
              LinkedIn
            </a>

            <a href="mailto:your-email@example.com" aria-label="Email" 
            className="flex flex-col items-center gap-2 transition hover:text-blue-400">
              <MdEmail size={35} className="border w-auto rounded-lg p-[5px] text-white transition hover:text-blue-400"/>
              Email
            </a>
          </div>
        </div>

        <div className="relative order-1 mx-auto w-full max-w-md lg:order-2 lg:max-w-none">
          <img
            src={nyinyiaung}
            alt="Nyi Nyi Aung"
            className="relative z-10 mx-auto w-full object-contain object-bottom 
            rounded-[5%] shadow-[0_0_60px_rgba(37,99,235,0.15)] drop-shadow-[2px_6px_40px_rgba(37,99,235,0.25)]
            "
          />
        </div>
      </div>

      <div className="mx-auto mt-12 grid max-w-7xl grid-cols-2 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] sm:grid-cols-4">
        <div className="border-white/10 px-4 py-6 text-center sm:border-r sm:last:border-r-0">
          <h3 className="text-xl font-bold text-white sm:text-2xl">2+</h3>
          <p className="mt-2 text-sm text-gray-400">Projects</p>
        </div>

        <div className="border-white/10 px-4 py-6 text-center sm:border-r sm:last:border-r-0">
          <h3 className="text-xl font-bold text-white sm:text-2xl">React</h3>
          <p className="mt-2 text-sm text-gray-400">Frontend</p>
        </div>

        <div className="border-white/10 px-4 py-6 text-center sm:border-r sm:last:border-r-0">
          <h3 className="text-xl font-bold text-white sm:text-2xl">TypeScript</h3>
          <p className="mt-2 text-sm text-gray-400">Modern Code</p>
        </div>

        <div className="border-white/10 px-4 py-6 text-center sm:border-r sm:last:border-r-0">
          <h3 className="text-xl font-bold text-white sm:text-2xl">Always</h3>
          <p className="mt-2 text-sm text-gray-400">Learning</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

