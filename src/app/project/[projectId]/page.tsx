"use client";
import { ThemeSwitcher } from "@/app/theme-switcher";
import { projects } from "@/content";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

const ProjectPage: React.FC = () => {
  const url = usePathname();
  const projectName = url.split("/").pop();
  const [project, setProject] = useState<ProjectDetails | null>(null);

  useEffect(() => {
    if (projectName) {
      const foundProject = projects.find((p) => p.projectId === projectName);
      setProject(foundProject || null);
    }
  }, [projectName]);

  if (!project) {
    return (
      <div className="min-h-screen bg-primary-background-color">
        <header className="fixed top-0 left-0 right-0 z-10 rounded-3xl border flex items-center py-4 text-black bg-white mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-64 mt-4 font-semibold">
          <nav className="flex-1 flex justify-start">
            <Link href="/" className="ml-4 sm:ml-8">
              <FaArrowLeftLong className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </nav>
          <h1 className="text-lg sm:text-xl font-semibold flex-1 text-center">
            Project
          </h1>
          <div className="flex-1"></div>
        </header>
        <div className="pt-24 sm:pt-32 md:pt-40 lg:pt-48 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-8 md:px-16">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="skeleton h-4 w-full"></div>
              ))}
            </div>
            <div className="w-full md:w-1/2">
              <div className="skeleton h-48 sm:h-56 md:h-64 w-full"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary-background-color">
      <header className="fixed top-0 left-0 right-0 z-10 rounded-3xl border-header-border-color border flex items-center justify-between py-4 sm:py-6 text-header-text-color bg-secondary-background-color mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-64 mt-4 font-semibold">
        <nav className="flex-1 flex justify-start">
          <Link href="/#projects" className="ml-4 sm:ml-8">
            <FaArrowLeftLong className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </nav>
        <h1 className="text-xs sm:text-base md:text-lg lg:text-xl font-semibold flex-1 text-center truncate px-2">
          {project.projectName}
        </h1>

        <div className="flex-1 flex justify-end items-center mr-4 sm:mr-8">
          <a
            href={project.projectLink}
            className="text-xs sm:text-sm font-semibold underline truncate max-w-[120px] sm:max-w-[200px]"
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.projectLink}
          </a>
        </div>
      </header>
      <main className="pt-24 sm:pt-32 md:pt-40 lg:pt-48 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-8 md:px-16 text-primary-text-color">
        {project.imageSections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center mb-16 sm:mb-24 md:mb-36 ${
              index % 2 !== 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div
              className={`w-full md:w-1/2 mb-8 md:mb-0 ${
                index % 2 !== 0 ? "md:pr-8 lg:pr-16" : "md:pl-8 lg:pl-16"
              }`}
            >
              <Image
                src={section.image}
                alt={`Section ${index + 1} image`}
                width={800}
                height={600}
                layout="responsive"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div
              className={`w-full md:w-1/2 flex flex-col items-center ${
                index % 2 === 0 ? "md:pl-8 lg:pl-16" : "md:pr-8 lg:pr-16"
              }`}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center md:text-left">
                {section.title}
              </h2>
              <p className="text-base sm:text-lg leading-relaxed font-medium text-center md:text-left">
                {section.text}
              </p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default ProjectPage;
