import { projects } from "@/content";
import ProjectComponent from "./project-component";
import SectionTitle from "../section-title";

const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="flex flex-col px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 py-12 min-h-screen"
    >
      <SectionTitle title="Projects" />
      <div className="space-y-8 md:space-y-12">
        {projects.map((project, index) => (
          <ProjectComponent key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
