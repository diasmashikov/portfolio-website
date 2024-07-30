import CardTitle from "../card-title";
import Chip from "../chip";
import { JobDescription } from "../experience/experience-component";
import ExternalLink from "../external-link";

const OpenSourceComponent: React.FC<OpenSourceDetails> = ({
  projectName,
  contributionDescription,
  skillsUtilized,
  projectLink,
}) => {
  return (
    <div className="card bg-secondary-background-color shadow-xl p-4 sm:p-6 md:p-8 flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-4">
        <CardTitle name={projectName} />
      </div>
      <div>
        <JobDescription jobDescription={contributionDescription} />
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div className="flex flex-row flex-wrap gap-2">
          {skillsUtilized.map((skill, index) => (
            <Chip key={index} skill={skill} />
          ))}
        </div>
        <ExternalLink
          href={projectLink}
          websiteName="Ivy Wallet"
          className="mt-4 sm:mt-0"
        />
      </div>
    </div>
  );
};

export default OpenSourceComponent;
