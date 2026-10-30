
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import novastore from "../assets/images/novastore.png";
import thwestore from "../assets/images/thwestore.png";
import imagegallery from "../assets/images/imagegallery.png";
import todoimage from "../assets/images/todoapp.png";

const projects = [
  {
    id: 1,
    title: "NovaTech Gadget Store",
    category: "E-commerce Website",
    description:
      "A modern gadget e-commerce platform featuring product browsing, shopping cart, categories, user authentication, and a responsive shopping experience.",
    image: novastore,
    technologies: ["HTML5","React", "JavaScript", "Vanilla CSS", "Vite", "Context API","React Router"],
    github: "https://github.com/jamesroben29-coder/nova-tech-gadget-store",
    demo: "https://nova-tech-gadget-store.vercel.app/",
    accent: "text-blue-400",
    imageBg: "bg-slate-900",
  },
  {
    id: 2,
    title: "Thwe-Store",
    category: "E-commerce Website",
    description:
      "A modern online shopping application with product browsing, shopping cart, wishlist, search functionality, and checkout features.",
    image: thwestore,
    technologies: ["HTML5", "React", "JavaScript", "CSS3", "Context API", "React Router", "Vite"],
    github: "https://github.com/jamesroben29-coder/thwe-store",
    demo: "https://thwe-store.vercel.app/",
    accent: "text-blue-400",
    imageBg: "bg-slate-100",
  },
  {
    id: 3,
    title: "Image Gallery",
    category: "Image Management App",
    description:
      "A responsive image gallery application with local image uploads, API images, search functionality, duplicate detection, and image management.",
    image: imagegallery,
    technologies: ["HTML5","React", "TypeScript", "CSS3", "Vite" ],
    github: "https://github.com/jamesroben29-coder/image-gallery-typescript",
    demo: "https://image-gallery-typescript-eta.vercel.app/",
    accent: "text-emerald-400",
    imageBg: "bg-white",
  },
  {
    title: "React Todo App",
    category: "TASK MANAGEMENT APP",
    image : todoimage,
    description:
        "A task management application built with React. Users can add, edit, delete, and mark tasks as complete.",
    technologies: ["HTML5", "React.js", "JavaScript", "CSS3", "Vite"],
    github:
        "https://github.com/jamesroben29-coder/react-todo-app",
    demo:
        "https://nna-react-todo-app.vercel.app/",
    accent: "text-blue-400",
    imageBg: "bg-slate-100",
    },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[#050B16] px-5 py-20 text-white md:px-8 lg:px-12 scroll-mt-24 ..."
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-blue-500">
            My Projects
          </p>

          <h2 className="text-3xl font-extrabold md:text-5xl">
            Featured <span className="text-blue-500">Projects</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-blue-500" />

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400 md:text-lg">
            Here are some of the projects I have built while learning
            and improving my frontend development skills.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

          {projects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-b from-slate-900 to-[#080F1D] transition duration-300 hover:-translate-y-2 hover:border-blue-500/70 hover:shadow-[0_15px_45px_rgba(37,99,235,0.12)]"
            >

              {/* Project Screenshot */}
              <div
                className={`h-56 overflow-hidden ${project.imageBg}`}
              >
                <img
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Project Details */}
              <div className="flex flex-1 flex-col p-6">

                <p className={`mb-2 text-xs font-bold uppercase tracking-widest ${project.accent}`}>
                  {project.category}
                </p>

                <h3 className="mb-3 text-2xl font-bold transition group-hover:text-blue-400">
                  {project.title}
                </h3>

                <p className="mb-6 flex-1 text-sm leading-7 text-gray-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-xs font-semibold text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex items-center gap-5 border-t border-white/10 pt-5">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 transition hover:text-blue-400"
                    aria-label={`View ${project.title} GitHub repository`}
                  >
                    <FaGithub size={19} />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium 
                    text-gray-400 transition hover:text-blue-400 cursor-pointer"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <FiExternalLink size={18} />
                    Live Demo
                  </a>

                </div>
              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;
