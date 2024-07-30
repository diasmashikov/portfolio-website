import Chip from "../chip";
import SectionTitle from "../section-title";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { CiServer } from "react-icons/ci";
import { VscTools } from "react-icons/vsc";
import SkillShevron from "./skill-shevron";
import { backendSkills, devTools, frontendSkills } from "@/content";

export const skills: ShevronSkillsData[] = [
  {
    shevronIcon: (
      <HiOutlineComputerDesktop className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
    ),
    shevronTitle: "Frontend",
    skills: frontendSkills,
  },
  {
    shevronIcon: (
      <CiServer className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
    ),
    shevronTitle: "Backend",
    skills: backendSkills,
  },
  {
    shevronIcon: (
      <VscTools className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
    ),
    shevronTitle: "DevOps",
    skills: devTools,
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section
      id="open-source"
      className="flex flex-col px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 min-h-screen py-12"
    >
      <SectionTitle title="Skills" />
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row">
          {skills.map((skill) => (
            <SkillShevron
              key={skill.shevronTitle}
              shevronIcon={skill.shevronIcon}
              shevronTitle={skill.shevronTitle}
              frontendSkills={skill.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
