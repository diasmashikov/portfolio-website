import React from "react";
import Chip from "../chip";

interface SkillShevronProps {
  shevronIcon: React.ReactNode;
  shevronTitle: string;
  frontendSkills: string[];
}

const SkillShevron: React.FC<SkillShevronProps> = ({
  shevronIcon,
  shevronTitle,
  frontendSkills,
}) => {
  return (
    <div className="card flex flex-col items-center bg-secondary-background-color text-primary-text-color shadow-md w-full md:w-1/3 p-4  md:m-4 gap-4 md:gap-6">
      {shevronIcon}
      <h3 className="text-xl sm:text-2xl font-bold">{shevronTitle}</h3>
      <div className="flex flex-row flex-wrap items-center justify-center gap-2">
        {frontendSkills.map((skill) => (
          <Chip key={skill} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillShevron;
