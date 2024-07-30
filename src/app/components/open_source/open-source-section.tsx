import { openSourceProjects } from "@/content";
import OpenSourceComponent from "./open-source-component";
import SectionTitle from "../section-title";

const OpenSourceSection: React.FC = () => {
  return (
    <section
      id="open-source"
      className="flex flex-col px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 py-12 min-h-screen"
    >
      <SectionTitle
        title="Open Source Contribution"
        className="mt-16 sm:mt-32 md:mt-48 lg:mt-64"
      />
      <div className="space-y-8 md:space-y-12">
        {openSourceProjects.map((openSourceProject, index) => (
          <OpenSourceComponent key={index} {...openSourceProject} />
        ))}
      </div>
    </section>
  );
};

export default OpenSourceSection;
