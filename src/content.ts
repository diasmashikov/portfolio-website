export const experiences: ExperienceDetails[] = [
  {
    companyName: "UPMC",
    jobTitle: "Full-Stack Engineering Intern",
    workPeriod: "June 2024 - Present",
    jobDescription: [
      "Led the design and development of the Medical Histology Learning Platform, utilizing NextJS and FastAPI to minimize learning time by 50% through streamlined interfaces and AI model integrations",
      "Developed the histology classification model, reaching 95.4% accuracy in predicting the organism type using ResNet 50, enhancing diagnostic accuracy",
      "Fine-tuned the GPT-4 model to generate detailed explanations of histology imagery scenes, significantly enhancing user comprehension and engagement with histological content",
      "Gave a series of lectures to over 24 high school students on developing AI applications using Liner.ai and PyTorch, promoting early interest in AI technologies",
    ],
  },
  {
    companyName: "University of Pittsburgh",
    jobTitle: "Full-Stack Engineering Intern",
    workPeriod: "Sep. 2023 - Dec. 2023",
    jobDescription: [
      "Led the design and development of the experimental Knee Analysis platform using ReactJS and Django, incorporating real-time data processing and intuitive user interfaces to reduce diagnosis time by 39%",
      "Integrated the Research Lab’s AI models on Oracle Cloud, enabling real-time testing and validation of AI predictions on live data through Django endpoints, enhancing the accuracy and reliability of diagnostic tools",
    ],
  },
  {
    companyName: "PayPal",
    jobTitle: "Software Engineering Intern",
    workPeriod: "June 2022 - Sep 2022",
    jobDescription: [
      "Enhanced user engagement and visibility of financial products by 3% through the integration of all financial services into a cohesive Finance Screen on Android for an app used by 12,000,000 people",
      "Led the upgrade of 30% of PayPal Business SDKs Gradle files to API 31, overcoming compatibility issues and employing automated testing frameworks to ensure stability for an expanded user base",
    ],
  },
  {
    companyName: "Rosemary",
    jobTitle: "Full-Stack Engineer",
    workPeriod: "July 2021 - November 2021",
    jobDescription: [
      "Developed a full-stack e-commerce mobile application for Android and iOS, enhancing scalability and user experience using Flutter, Express.js Heroku, AWS, and MongoDB to support increasing user traffic",
      "Engineered a NodeJS backend server, implementing parallel network call algorithms such as concurrent API requests and load balancing, resulting in a 50% improvement in startup time and significant performance boost",
    ],
  },
];

export const openSourceProjects: OpenSourceDetails[] = [
  {
    projectName: "Ivy Wallet",
    contributionDescription: [
      "Integrated caching mechanism to Category Data Repository gaining a 75% improvement in speed that offers a smoother and more responsive user experience navigating throguh the app",
      "Resolved a user interface inconsistency by introducing a dedicated UI element for categorizing account transfers,which enhanced the logical flow and user comprehension of financial transactions",
      "Implemented an intuitive feedback mechanism using the Toaster class to alert users of incorrect inputs on transaction screens which reduces user error and streamlines the process",
    ],
    skillsUtilized: ["Android", "Jetpack Compose", "Caching"],
    projectLink: "https://github.com/Ivy-Apps/ivy-wallet",
  },
];

export const projects: ProjectDetails[] = [
  {
    projectId: "histology-learning-platform",
    projectName: "Histology Learning Platform",
    projectForwardPicture: "/histology_learning_portfolio.png",
    projectDescription: `Discover a supportive and collaborative space for studying histology. Our platform features advanced computer vision AI models to help you learn and understand histological structures. Utilize AI-powered tools for annotating findings, creating test materials, and collaborating with peers. With instant feedback and progress tracking from our context-aware AI assistant and integrated ChatGPT, focus on your learning journey while our technology enhances your histology studies.`,
    projectLink: "",
    skillsUtilized: ["Next.js", "FastAPI", "Konva.js"],
    activeUsers: "54",
    imageSections: [
      {
        image: "/histology/histology_1.png",
        title: "Work on Multiple Projects",
        text: `Start and manage multiple projects to keep your histology studies organized and efficient.`,
      },
      {
        image: "/histology/histology_2.png",
        title: "Utilize AI for Analysis",
        text: `Utilize advanced computer vision AI models to learn and understand histological structures.`,
      },
      {
        image: "/histology/histology_3.png",
        title: "Annotate Your Findings",
        text: `Annotate findings, create test materials, and collaborate with peers.`,
      },
      {
        image: "/histology/histology_4.png",
        title: "Work with ChatGPT",
        text: `Get instant feedback and progress tracking from our context-aware AI assistant and integrated ChatGPT.`,
      },
    ],
  },
  {
    projectId: "diascodegym",
    projectName: "Diascodegym",
    projectForwardPicture: "/diascodegym_portfolio.png",
    projectDescription: `Tired of \"easy\" problems that are actually hard? At Diascodegym,
                our well-crafted, truly beginner-friendly coding challenges are
                designed to build your skills step-by-step. Our context-aware AI
                assistant is always ready to help without needing perfect prompts.
                Focus on learning and solving problems while our AI provides
                instant feedback and keeps track of your progress`,
    projectLink: "https://diascodegym.com",
    skillsUtilized: ["Next.js", "React.js", "Amplitude"],
    imageSections: [
      {
        image: "/diascodegym/diascodegym_1.png",
        title: "Well-Crafted Beginner Problems",
        text: `Our well-crafted, truly beginner-friendly coding challenges are designed to build your skills step-by-step.`,
      },
      {
        image: "/diascodegym/diascodegym_2.png",
        title: "Comfortable Code Editor",
        text: `Our comfortable coding editor is designed to help you focus on learning and solving problems with everything you need`,
      },
      {
        image: "/diascodegym/diascodegym_3.png",
        title: "Context-aware ChatGPT Support",
        text: `Our context-aware AI assistant is always ready to help without needing perfect prompts. It understands everything that is happening on the screen from problem description to output console in real-time.`,
      },
    ],
    activeUsers: "31",
  },
];

export const frontendSkills = [
  "Typescript",
  "Javascript",
  "NextJS",
  "ReactJS",
  "HTML",
  "CSS",
  "Jest",
  "Tailwind",
  "EmailJS",
  "Axios",
  "DaisyUI",
];

export const backendSkills = [
  "NodeJS",
  "ExpressJS",
  "MongoDB",
  "PostgreSQL",
  "Mongoose",
  "JWT",
  "Go",
  "Fiber",
  "Microservices",
  "Python",
  "FastAPI",
];

export const devTools = [
  "Docker",
  "Git",

  "Linux",

  "Jenkins",

  "GitHub Actions",
  "Kubernetes",
  "AWS",
  "GCP",
  "Azure",
  "Heroku",

  "Vercel",
  "Postman",
];
