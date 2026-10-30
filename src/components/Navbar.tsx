
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-30% 0px -60% 0px",
        threshold: 0,
      }
    );

    navLinks.forEach((link) => {
      const section = document.getElementById(link.id);

      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="mx-auto fixed top-0 left-1/2 z-50 flex w-full max-w-7xl -translate-x-1/2 
      items-center justify-between border-b border-white/10 bg-[#0B0F19]/90 backdrop-blur-md
      px-5 py-4 sm:px-8 lg:pl-px-3"
    >

      <div className="text-xl font-bold text-white sm:text-2xl">
        <a
          href="#home"
          onClick={() => {
            setActiveSection("home");
            setIsMenuOpen(false);
          }}
          className="transition hover:text-blue-400"
        >
          Nyi Nyi Aung
        </a>
      </div>

      <button
        className="cursor-pointer rounded-lg border border-white/10 p-2 text-gray-200 transition-colors hover:bg-white/10 hover:text-blue-400 md:hidden"
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } absolute left-0 top-full w-full flex-col gap-5 border-b border-white/10 bg-[#0B0F19] px-5 py-6 md:static md:flex md:w-auto md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0`}
      >
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={() => {
              setIsMenuOpen(false);
              setActiveSection(link.id);
            }}
            className={`relative w-fit text-md font-medium transition-colors duration-300
              after:absolute after:-bottom-2 after:left-0 after:h-0.5
              after:w-full after:origin-left after:bg-blue-400
              after:transition-transform after:duration-300
              hover:text-blue-400 hover:after:scale-x-100
              ${
                activeSection === link.id
                  ? "text-blue-400 after:scale-x-100"
                  : "text-gray-300 after:scale-x-0"
              }`}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
