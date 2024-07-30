"use client";
import { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { ThemeSwitcher } from "../theme-switcher";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 1404);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        const yOffset = -150;
        const y =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }, 1);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-10 rounded-3xl border-header-border-color border flex items-center justify-between py-4 sm:py-6 text-header-text-color bg-secondary-background-color mx-2 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-64 mt-4 font-semibold">
      <nav className="flex flex-1 justify-between items-center w-full px-8 sm:px-8 md:px-12">
        <div className="flex items-center">
          {isMobile && (
            <button
              className="text-2xl mr-4"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          )}
          <ul
            className={`flex ${
              isMobile
                ? "flex-col absolute top-full left-0 right-0 bg-secondary-background-color p-4"
                : "flex-row"
            } gap-4 md:gap-8 items-center ${
              isMobile && !isMenuOpen ? "hidden" : "flex"
            }`}
          >
            <li>
              <a href="#start" onClick={(e) => handleScroll(e, "start")}>
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                onClick={(e) => handleScroll(e, "experience")}
              >
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" onClick={(e) => handleScroll(e, "projects")}>
                Projects
              </a>
            </li>
            <li>
              <a
                href="#open-source"
                onClick={(e) => handleScroll(e, "open-source")}
              >
                Open Source
              </a>
            </li>
            <li>
              <a
                href="#contactme"
                onClick={(e) => handleScroll(e, "contactme")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <ul className="flex flex-row gap-6 sm:gap-6 items-center">
          <li>
            <a
              href="https://github.com/diasmashikov"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-3xl sm:text-3xl" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/dias-mashikov/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-3xl sm:text-3xl text-blue-500" />
            </a>
          </li>
          <li>
            <ThemeSwitcher />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
