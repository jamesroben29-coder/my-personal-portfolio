

import {
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

import {
  FiArrowUp,
  FiExternalLink,
} from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-gray-800 bg-[#080d19] px-6 pb-8 pt-16 text-white md:px-12 lg:px-20">

      <div className="mx-auto max-w-7xl">

        <div className="grid grid-cols-1 gap-12 border-b border-gray-800 pb-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">

          <div>
            <a
              href="#home"
              className="inline-block text-3xl font-extrabold tracking-tight transition hover:text-blue-500"
            >
              Nyi Nyi Aung<span className="text-blue-500">.</span>
            </a>

            <p className="mt-5 max-w-sm leading-8 text-gray-400">
              Frontend Developer passionate about building
              modern, responsive, and user-friendly web
              applications. Always learning, improving, and
              creating.
            </p>


            <div className="mt-6 flex gap-4">

              <a
                href="https://github.com/jamesroben29-coder"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="flex h-14 w-14 items-center justify-center rounded-xl border border-gray-700 bg-[#0d1525] text-2xl text-gray-300 transition duration-300 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
              >
                <FaGithub />
              </a>

              <a
                href="mailto:jamesroben29@gmail.com"
                aria-label="Send Email"
                className="flex h-14 w-14 items-center justify-center rounded-xl border border-gray-700 bg-[#0d1525] text-2xl text-gray-300 transition duration-300 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
              >
                <FaEnvelope />
              </a>

            </div>
          </div>

          <div>
            <h3 className="mb-8 text-xl font-bold text-white">
              Quick Links
            </h3>

            <ul className="space-y-5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-3 text-gray-400 transition duration-300 hover:translate-x-1 hover:text-blue-400"
                  >
                    <span className="text-blue-500">›</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          <div>
            <h3 className="mb-6 text-xl font-bold text-white">
              Get In Touch
            </h3>

            <p className="mb-6 max-w-sm leading-7 text-gray-400">
              Have an opportunity or an interesting project?
              Feel free to reach out.
            </p>

            <a
              href="mailto:jamesroben29@gmail.com"
              className="inline-flex max-w-full items-start gap-3 text-blue-400 transition duration-300 hover:text-blue-300"
            >
              <FaEnvelope className="mt-1 shrink-0 text-xl" />

              <span className="min-w-0 break-all font-semibold">
                jamesroben29@gmail.com
              </span>

              <FiExternalLink className="mt-1 shrink-0 text-lg" />
            </a>

            <div className="mt-7">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-blue-500/30"
              >
                Contact Me
                <FiArrowUp />
              </a>
            </div>
          </div>

        </div>

        <div className="flex flex-col items-center justify-between gap-6 pt-8 text-center md:flex-row md:text-left">

          <p className="text-sm leading-6 text-gray-500">
            © {currentYear} Nyi Nyi Aung. All rights reserved.
          </p>


          <p className="text-sm leading-6 text-gray-500">
            Designed & Built with{" "}
            <span className="font-semibold text-blue-500">
              React
            </span>
            {" "}and{" "}
            <span className="font-semibold text-blue-500">
              Tailwind CSS
            </span>
          </p>

          <a
            href="#home"
            aria-label="Back to Top"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gray-700 text-xl text-gray-300 transition duration-300 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
          >
            <FiArrowUp />
          </a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
