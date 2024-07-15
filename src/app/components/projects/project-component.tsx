import { AiFillAmazonCircle } from "react-icons/ai";
import { FaExternalLinkAlt, FaUser } from "react-icons/fa";
import Image from "next/image";
import CardTitle from "../card-title";
import MetricTitle from "../metric-title";
import Chip from "../chip";
import ExternalLink from "../external-link";
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
    <div className="card bg-base-100 shadow-xl p-8 flex flex-row gap-1 mb-8">
      <div className="w-1/2 flex flex-col ">
        <div className="flex flex-row justify-between pb-4">
          <CardTitle name={projectName} />
          <MetricTitle metricTitle="Active Users" value={activeUsers} />
        </div>

        <div>
          <p className="text-gray-800 pb-6 leading-8">{projectDescription}</p>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row flex-wrap gap-2">
            {skillsUtilized.map((skill, index) => (
              <Chip key={index} skill={skill} />
            ))}
          </div>

          <InternalLink
            href={`project/${projectId}`}
            websiteName="Learn more"
          />
        </div>
      </div>
      <div className="bg-gray-300 w-px h-full mx-4"></div>
      <div className="w-1/2 relative group">
        <Image
          src={projectForwardPicture}
          alt="Description of the image"
          fill
        />
        <div className="absolute inset-0 bg-gray-700 bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
          <InternalLink
            href={`project/${projectId}`}
            websiteName="Learn more"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;
