import { projects } from "@/content";
import { AiFillAmazonCircle } from "react-icons/ai";
import { FaExternalLinkAlt, FaUser } from "react-icons/fa";
import ProjectComponent from "./project-component";

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="flex flex-col px-36 min-h-screen">
      <h2 className="text-6xl font-bold mb-8">Projects</h2>
      {projects.map((project, index) => (
        <ProjectComponent key={index} {...project} />
      ))}
    </section>
  );
};

export default ProjectsSection;
