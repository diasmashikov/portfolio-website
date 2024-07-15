"use client";

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
      <div>
        <header className="fixed top-0 left-0 right-0 z-10 rounded-3xl border flex items-center py-4 text-black bg-white mx-64 mt-4 font-semibold">
          <nav className="flex-1 flex justify-start">
            <Link href="/" className="ml-8">
              <FaArrowLeftLong className="size-5" />
            </Link>
          </nav>
          <h1 className="text-xl font-semibold flex-1 text-center">Project</h1>
          <div className="flex-1"></div>
        </header>
        <div className="pt-48 pb-16 px-16">
          <div className="flex flex-row gap-16">
            <div className="w-1/2 flex flex-col gap-4">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="skeleton h-4 w-full"></div>
              ))}
            </div>
            <div className="w-1/2">
              <div className="skeleton h-64 w-full"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <header className="fixed top-0 left-0 right-0 z-10 rounded-3xl border flex items-center py-4 text-black bg-white mx-64 mt-4 font-semibold">
        <nav className="flex-1 flex justify-start">
          <Link href="/" className="ml-8">
            <FaArrowLeftLong className="size-5" />
          </Link>
        </nav>
        <h1 className="text-xl font-semibold flex-1 text-center">
          {project.projectName}
        </h1>
        <div className="flex-1 flex justify-end">
          <a
            href={project.projectLink}
            className="text-sm font-semibold underline mr-8"
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.projectLink}
          </a>
        </div>
      </header>

      <div className="pt-48 pb-16 px-16">
        {project.imageSections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center mb-36 ${
              index % 2 !== 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div
              className={`w-full md:w-1/2 mb-4 md:mb-0  ${
                index % 2 !== 0 ? "md:pr-16" : "md:pl-16"
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
                index % 2 === 0 ? "md:pl-16" : "md:pr-16"
              }`}
            >
              <h1 className="text-3xl font-bold mb-4">{section.title}</h1>
              <p className="text-lg leading-relaxed font-medium">
                {section.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
