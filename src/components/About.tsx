
import nyinyiaung2 from "../assets/images/nyinyiaung2.png";

import { FaReact, FaDesktop } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";

const About = () => {
  return (
    <section 
      id="about"
      className="bg-[#050b16] text-white px-5 md:px-8 lg:px-12 py-20 md:py-24 scroll-mt-24 ..."
    >
  
      <div className="text-center mb-14">
        <h2 className="text-blue-500 text-sm font-bold tracking-[5px] uppercase">
          About Me
        </h2>

        <p className="text-4xl md:text-5xl font-extrabold text-white mt-3">
          Get to know me{" "}
          <span className="text-blue-500">better</span>
        </p>

        <div className="w-16 h-1 bg-blue-500 rounded-full mx-auto mt-6"></div>
      </div>

      
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-7 max-w-7xl mx-auto">

        
        <div className="bg-gradient-to-br from-[#0b1527] to-[#09111f] border border-blue-500/20 rounded-2xl p-6 md:p-8">

          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-7 items-center">

            
            <div className="w-full">
              <img
                src={nyinyiaung2}
                alt="Nyi Nyi Aung"
                className="w-full h-full max-h-[480px] object-cover object-center rounded-xl"
              />
            </div>

      
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 before:content-[''] before:block before:w-14 before:h-1 before:bg-blue-500 before:rounded-full before:mb-5">
                Who I Am
              </h3>

              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-5">
                Hello! I'm Nyi Nyi Aung, an aspiring Frontend Developer
                passionate about building modern and user-friendly web
                applications.
              </p>

              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-5">
                I enjoy turning ideas into interactive web experiences
                using React, TypeScript, and Tailwind CSS. I'm continuously
                learning and improving my skills by building real-world
                projects.
              </p>

              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                My goal is to become a professional Frontend Developer
                and create responsive, accessible, and high-quality web
                applications.
              </p>
            </div>

          </div>
        </div>

        
        <div className="bg-gradient-to-br from-[#0b1527] to-[#09111f] border border-blue-500/20 rounded-2xl p-6 md:p-8">

          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 before:content-[''] before:block before:w-14 before:h-1 before:bg-blue-500 before:rounded-full before:mb-5">
            What I'm Learning
          </h3>

          <ul className="list-none p-0 m-0 space-y-3">

            <li className="flex items-center gap-5 bg-[#101d30] border border-white/10 rounded-xl px-5 py-4 text-blue-100 transition-all duration-300 hover:border-blue-500 hover:bg-[#142440] hover:translate-x-1">
              <FaReact className="text-cyan-400 text-3xl shrink-0" />
              <span className="text-base md:text-lg">React.js</span>
            </li>

            <li className="flex items-center gap-5 bg-[#101d30] border border-white/10 rounded-xl px-5 py-4 text-blue-100 transition-all duration-300 hover:border-blue-500 hover:bg-[#142440] hover:translate-x-1">
              <SiTypescript className="text-blue-500 text-3xl shrink-0" />
              <span className="text-base md:text-lg">TypeScript</span>
            </li>

            <li className="flex items-center gap-5 bg-[#101d30] border border-white/10 rounded-xl px-5 py-4 text-blue-100 transition-all duration-300 hover:border-blue-500 hover:bg-[#142440] hover:translate-x-1">
              <SiTailwindcss className="text-cyan-400 text-3xl shrink-0" />
              <span className="text-base md:text-lg">Tailwind CSS</span>
            </li>

            <li className="flex items-center gap-5 bg-[#101d30] border border-white/10 rounded-xl px-5 py-4 text-blue-100 transition-all duration-300 hover:border-blue-500 hover:bg-[#142440] hover:translate-x-1">
              <SiJavascript className="text-yellow-400 text-3xl shrink-0" />
              <span className="text-base md:text-lg">JavaScript</span>
            </li>

            <li className="flex items-center gap-5 bg-[#101d30] border border-white/10 rounded-xl px-5 py-4 text-blue-100 transition-all duration-300 hover:border-blue-500 hover:bg-[#142440] hover:translate-x-1">
              <FaDesktop className="text-blue-300 text-3xl shrink-0" />
              <span className="text-base md:text-lg">
                Responsive Web Design
              </span>
            </li>

          </ul>
        </div>

      </div>
    </section>
  );
};

export default About;
