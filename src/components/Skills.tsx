
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiFigma,
  SiNextdotjs,
  SiNodedotjs,
} from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills" className="bg-[#050b16] text-white px-5 md:px-8 lg:px-12 py-20 md:py-24 scroll-mt-24 ...">
      
      <div className="text-center mb-14">
        <h2 className="text-md text-blue-500 font-bold tracking-[5px] uppercase">My Skills</h2>
        <p className="text-4xl md:text-5xl font-extrabold mt-3">I work with <span className="text-blue-500">Technologies</span></p>
        <div className="mx-auto mt-6 h-1.5 w-20 rounded-full bg-blue-500"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-2-7xl mx-auto">

    
        <div className="bg-gradient-to-br from-[#0b1527] to-[#09111f] border border-blue-500/20 rounded-2xl p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Frontend Development</h3>

          <div className="grid grid-cols-2 gap-4">

            <div className="flex flex-col items-center justify-center gap-3 bg-[#101d30] border border-white/10 
            rounded-xl p-5 transition-all duration-300 
            hover:border-blue-500 hover:bg-[#142440] hover:-translate-y-1">
              <FaHtml5 className="text-4xl text-blue-400"/>
              <span className="text-sm md:text-base text-gray-300 font-medium">HTML5</span>
            </div>

            <div className="flex flex-col items-center justify-center gap-3 bg-[#101d30] border border-white/10 
            rounded-xl p-5 transition-all duration-300 
            hover:border-blue-500 hover:bg-[#142440] hover:-translate-y-1">
              <FaCss3Alt className="text-4xl text-blue-400"/>
              <span className="text-sm md:text-base text-gray-300 font-medium">CSS3</span>
            </div>

            <div className="flex flex-col items-center justify-center gap-3 bg-[#101d30] border border-white/10 
            rounded-xl p-5 transition-all duration-300 
            hover:border-blue-500 hover:bg-[#142440] hover:-translate-y-1">
              <FaJs className="text-4xl text-blue-400"/>
              <span className="text-sm md:text-base text-gray-300 font-medium">JavaScript</span>
            </div>

            <div className="flex flex-col items-center justify-center gap-3 bg-[#101d30] border border-white/10 
            rounded-xl p-5 transition-all duration-300 
            hover:border-blue-500 hover:bg-[#142440] hover:-translate-y-1">
              <FaReact className="text-4xl text-blue-400"/>
              <span className="text-sm md:text-base text-gray-300 font-medium">React.js</span>
            </div>

            <div className="flex flex-col items-center justify-center gap-3 bg-[#101d30] border border-white/10 
            rounded-xl p-5 transition-all duration-300 
            hover:border-blue-500 hover:bg-[#142440] hover:-translate-y-1">
              <SiTypescript className="text-4xl text-blue-400"/>
              <span className="text-sm md:text-base text-gray-300 font-medium">TypeScript</span>
            </div>

            <div className="flex flex-col items-center justify-center gap-3 bg-[#101d30] border border-white/10 
            rounded-xl p-5 transition-all duration-300 
            hover:border-blue-500 hover:bg-[#142440] hover:-translate-y-1">
              <SiNextdotjs className="text-4xl text-blue-400"/>
              <span className="text-sm md:text-base text-gray-300 font-medium">Next.js</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#0b1527] to-[#09111f] border border-blue-500/20 rounded-2xl p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Styling & Design</h3>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center justify-center gap-3 bg-[#101d30] border border-white/10 
            rounded-xl p-5 transition-all duration-300 
            hover:border-blue-500 hover:bg-[#142440] hover:-translate-y-1">
              <SiTailwindcss className="text-4xl text-blue-400"/>
              <span className="text-sm md:text-base text-gray-300 font-medium">Tailwind CSS</span>
            </div>

            <div className="flex flex-col items-center justify-center gap-3 bg-[#101d30] border border-white/10 
            rounded-xl p-5 transition-all duration-300 
            hover:border-blue-500 hover:bg-[#142440] hover:-translate-y-1">
              <SiFigma className="text-4xl text-blue-400"/>
              <span className="text-sm md:text-base text-gray-300 font-medium">Figma</span>
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className="bg-gradient-to-br from-[#0b1527] to-[#09111f] border border-blue-500/20 rounded-2xl p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Tools & Technologies</h3>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center justify-center gap-3 bg-[#101d30] border border-white/10 
            rounded-xl p-5 transition-all duration-300 
            hover:border-blue-500 hover:bg-[#142440] hover:-translate-y-1">
              <FaGitAlt className="text-4xl text-blue-400"/>
              <span className="text-sm md:text-base text-gray-300 font-medium">Git</span>
            </div>

            <div className="flex flex-col items-center justify-center gap-3 bg-[#101d30] border border-white/10 
            rounded-xl p-5 transition-all duration-300 
            hover:border-blue-500 hover:bg-[#142440] hover:-translate-y-1">
              <FaGithub className="text-4xl text-blue-400"/>
              <span className="text-sm md:text-base text-gray-300 font-medium">GitHub</span>
            </div>

            <div className="flex flex-col items-center justify-center gap-3 bg-[#101d30] border border-white/10 
            rounded-xl p-5 transition-all duration-300 
            hover:border-blue-500 hover:bg-[#142440] hover:-translate-y-1">
              <SiVite className="text-4xl text-blue-400"/>
              <span className="text-sm md:text-base text-gray-300 font-medium">Vite</span>
            </div>

            <div className="flex flex-col items-center justify-center gap-3 bg-[#101d30] border border-white/10 
            rounded-xl p-5 transition-all duration-300 
            hover:border-blue-500 hover:bg-[#142440] hover:-translate-y-1">
              <SiNodedotjs className="text-4xl text-blue-400"/>
              <span className="text-sm md:text-base text-gray-300 font-medium">Node.js</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
