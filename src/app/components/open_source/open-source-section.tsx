import { openSourceProjects } from "@/content";
import OpenSourceComponent from "./open-source-component";

const OpenSourceSection: React.FC = () => {
  return (
    <section id="open-source" className="flex flex-col px-36 min-h-screen">
      <h2 className="text-6xl font-bold mb-8 mt-48">
        Open Source Contributions
      </h2>

      {openSourceProjects.map((openSourceProject, index) => (
        <OpenSourceComponent key={index} {...openSourceProject} />
      ))}
    </section>
  );
};

export default OpenSourceSection;
