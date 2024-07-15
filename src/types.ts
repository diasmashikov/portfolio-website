type ExperienceDetails = {
  companyName: string;
  jobTitle: string;
  workPeriod: string;
  jobDescription: string[];
};

type ImageSection = {
  image: string;
  title: string;
  text: string;
};

type ProjectDetails = {
  projectId: string;
  projectName: string;
  projectForwardPicture: string;
  projectDescription: string;
  projectLink: string;
  skillsUtilized: string[];
  activeUsers: string;
  imageSections: ImageSection[];
};

type OpenSourceDetails = {
  projectName: string;
  contributionDescription: string[];
  skillsUtilized: string[];
  projectLink: string;
};

type ShevronSkillsData = {
  shevronIcon: React.ReactNode;
  shevronTitle: string;
  skills: string[];
};
