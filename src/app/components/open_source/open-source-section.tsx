import { openSourceProjects } from "@/content";
import OpenSourceComponent from "./open-source-component";
import SectionTitle from "../section-title";

const OpenSourceSection: React.FC = () => {
  return (
    <section id="open-source" className="flex flex-col px-36 min-h-screen">
      <SectionTitle title="Open Source Contribution" className="mt-64" />
      {openSourceProjects.map((openSourceProject, index) => (
        <OpenSourceComponent key={index} {...openSourceProject} />
      ))}
    </section>
  );
};

export default OpenSourceSection;
