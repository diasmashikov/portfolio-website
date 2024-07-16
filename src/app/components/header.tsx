"use client";

import { TbLetterD } from "react-icons/tb";

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
    <header className="fixed top-0 left-0 right-0 z-10 rounded-3xl border flex flex-row items-center justify-center py-6 text-black bg-white mx-64 mt-4 font-semibold">
      <nav>
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
      </nav>
    </header>
  );
};

export default Header;