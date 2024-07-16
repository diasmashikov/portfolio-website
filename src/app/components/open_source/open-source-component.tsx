import CardTitle from "../card-title";
import Chip from "../chip";
import { JobDescription } from "../experience/experience-component";
import ExternalLink from "../external-link";
import MetricTitle from "../metric-title";

const OpenSourceComponent: React.FC<OpenSourceDetails> = ({
  projectName,
  contributionDescription,
  skillsUtilized,
  projectLink,
}) => {
  return (
    <div className="card bg-secondary-background-color shadow-xl p-8 flex flex-col gap-1">
      <div className="flex flex-row justify-between pb-4">
        <CardTitle name={projectName} />
      </div>
      <div>
        <JobDescription jobDescription={contributionDescription} />
      </div>

      <div className="flex flex-row justify-between my-4">
        <div className="flex flex-row flex-wrap gap-2">
          {skillsUtilized.map((skill, index) => (
            <Chip key={index} skill={skill} />
          ))}
        </div>

        <ExternalLink href={projectLink} websiteName="Ivy Wallet" />
      </div>
    </div>
  );
};

export default OpenSourceComponent;
