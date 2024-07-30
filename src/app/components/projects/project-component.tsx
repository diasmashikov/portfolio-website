import Image from "next/image";
import CardTitle from "../card-title";
import MetricTitle from "../metric-title";
import Chip from "../chip";
import InternalLink from "@/app/internal-link";

const ProjectComponent: React.FC<ProjectDetails> = ({
  projectId,
  projectName,
  projectForwardPicture,
  projectDescription,
  projectLink,
  skillsUtilized,
  activeUsers,
}) => {
  return (
    <div className="card bg-secondary-background-color shadow-xl p-4 sm:p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8">
      <div className="w-full md:w-1/2 flex flex-col">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-4 space-y-3 sm:space-y-0">
          <CardTitle name={projectName} />
          <MetricTitle metricTitle="Active Users" value={activeUsers} />
        </div>
        <div>
          <p className="text-primary-text-color font-medium pb-6 leading-7 sm:leading-8">
            {projectDescription}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div className="flex flex-row flex-wrap gap-2">
            {skillsUtilized.map((skill, index) => (
              <Chip key={index} skill={skill} />
            ))}
          </div>
          <InternalLink
            href={`project/${projectId}`}
            websiteName="Learn more"
            className="mt-4 sm:mt-0"
          />
        </div>
      </div>
      <div className="hidden md:block bg-gray-300 w-px h-full mx-4"></div>
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="relative group w-full h-full">
          <Image
            src={projectForwardPicture}
            alt={`${projectName} preview`}
            layout="responsive"
            width={500}
            height={300}
            objectFit="contain"
          />
          <div className="absolute inset-0 bg-gray-700 bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
            <InternalLink
              href={`project/${projectId}`}
              websiteName="Learn more"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;
