import React from "react";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import Chip from "../chip";

// Define the props interface
interface SkillShevronProps {
  shevronIcon: React.ReactNode;
  shevronTitle: string;
  frontendSkills: string[];
}

// Define the component
const SkillShevron: React.FC<SkillShevronProps> = ({
  shevronIcon,
  shevronTitle,
  frontendSkills,
}) => {
  return (
    <div className="card flex flex-col items-center bg-secondary-background-color text-primary-text-color shadow-md w-1/3 p-4 m-4 gap-6">
      {shevronIcon}
      <h3 className="text-2xl font-bold">{shevronTitle}</h3>
      <div className="flex flex-row flex-wrap items-center justify-center gap-2">
        {frontendSkills.map((skill) => (
          <Chip key={skill} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillShevron;
