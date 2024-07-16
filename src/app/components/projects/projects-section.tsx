import { projects } from "@/content";
import { AiFillAmazonCircle } from "react-icons/ai";
import { FaExternalLinkAlt, FaUser } from "react-icons/fa";
import ProjectComponent from "./project-component";
import SectionTitle from "../section-title";

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="flex flex-col px-36 min-h-screen">
      <SectionTitle title="Projects" />
      {projects.map((project, index) => (
        <ProjectComponent key={index} {...project} />
      ))}
    </section>
  );
};

export default ProjectsSection;
