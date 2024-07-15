import Chip from "../chip";
import SectionTitle from "../section-title";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { CiServer } from "react-icons/ci";
import { VscTools } from "react-icons/vsc";
import SkillShevron from "./skill-shevron";
import { backendSkills, devTools, frontendSkills } from "@/content";

export const skills: ShevronSkillsData[] = [
  {
    shevronIcon: <HiOutlineComputerDesktop className="size-12" />,
    shevronTitle: "Frontend",
    skills: frontendSkills,
  },
  {
    shevronIcon: <CiServer className="size-12" />,
    shevronTitle: "Backend",
    skills: backendSkills,
  },
  {
    shevronIcon: <VscTools className="size-12" />,
    shevronTitle: "DevOps",
    skills: devTools,
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section id="open-source" className="flex flex-col px-36 min-h-screen">
      <SectionTitle title="Skills" />
      <div className="flex flex-col">
        <div className="flex flex-row">
          {skills.map((skill) => (
            <SkillShevron
              key={skill.shevronTitle} // Assuming shevronTitle is unique
              shevronIcon={skill.shevronIcon}
              shevronTitle={skill.shevronTitle}
              frontendSkills={skill.skills} // This prop name should match the expected prop in SkillShevron for the skills array
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
