"use client";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Header: React.FC = () => {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      // Adjust the scroll position after a short delay to allow smooth scrolling to complete
      setTimeout(() => {
        const yOffset = -150; // Adjust this value to the desired offset
        const y =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }, 1); // Delay in milliseconds (adjust as needed)
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-10 rounded-3xl border flex items-center justify-between py-6 text-black bg-white mx-64 mt-4 font-semibold">
      <nav className="flex flex-1 justify-between items-center mx-16">
        <ul className="flex flex-row gap-8 items-center">
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
              Open Source Contributions
            </a>
          </li>
          <li>
            <a href="#contactme" onClick={(e) => handleScroll(e, "contactme")}>
              Contact me
            </a>
          </li>
        </ul>
        <ul className="flex flex-row gap-6 items-center">
          <li>
            <a
              href="https://github.com/diasmashikov"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-3xl" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/dias-mashikov/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-3xl text-blue-500" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
