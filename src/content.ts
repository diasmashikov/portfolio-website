export const experiences: ExperienceDetails[] = [
  {
    companyName: "ShopMyLook",
    jobTitle: "Founding Software Engineer",
    workPeriod: "October 2024 – Present",
    jobDescription: [
      "Engineered a scalable influencer-brand marketing platform that supports 1,000+ daily active users during beta testing, ensuring fault-tolerant performance through distributed backend architecture built with Golang and PostgreSQL.",
      "Built and optimized a real-time analytics system to process 20,000+ daily events, leveraging Redis, AWS SQS, and PostgreSQL, improving data processing efficiency by enabling near-instant insights for users.",
      "Provisioned and automated server infrastructure using Ansible, Terraform, and Docker, achieving 99.9% uptime and ensuring seamless scaling during peak usage.",
      "Integrated Prometheus and Grafana to monitor and visualize server health, optimizing resource utilization and improving system reliability by 30%.",
      "Conducted load testing with K6 on PostgreSQL, PgBouncer, and system resources (CPU, RAM), identifying bottlenecks and increasing backend throughput by 25% under high traffic conditions.",
      "Streamlined user workflows by designing highly intuitive frontend dashboards with React and Next.js, improving task completion efficiency by 25% based on user feedback.",
      "Collaborated with cross-functional teams, including engineers, marketers, and product managers, to resolve ambiguous technical challenges, leading to a 20% faster product iteration cycle.",
    ],
  },
  {
    companyName: "UPMC",
    jobTitle: "Full-Stack Software Engineer Intern",
    workPeriod: "June 2024 – August 2024",
    jobDescription: [
      "Developed the Medical Imaging Learning Platform using ReactJS and FastAPI (Python), reducing imaging analysis time by 50% and accelerating clinician workflows.",
      "Engineered scalable backend streaming endpoints with FastAPI StreamingResponse, enabling real-time diagnostics through integration with a fine-tuned Llama 3.1 LLM.",
      "Improved medical image annotation precision by creating advanced tools with Konva.js and JavaScript’s Canvas API, increasing operational analysis speed by 30%.",
      "Designed an optimized MongoDB schema for metadata and annotation storage, reducing database query latency by 35%.",
    ],
  },
  {
    companyName: "University of Pittsburgh",
    jobTitle: "Full-Stack Engineering Intern",
    workPeriod: "Sep. 2023 - Dec. 2023",
    jobDescription: [
      "Led the design and development of the experimental Knee Analysis platform using ReactJS and Django, incorporating real-time data processing and intuitive user interfaces to reduce diagnosis time by 39%.",
      "Integrated the Research Lab’s AI models on Oracle Cloud, enabling real-time testing and validation of AI predictions on live data through Django endpoints, enhancing the accuracy and reliability of diagnostic tools.",
    ],
  },
  {
    companyName: "PayPal",
    jobTitle: "Software Engineering Intern",
    workPeriod: "June 2022 – September 2022",
    jobDescription: [
      "Enhanced engagement for 12M+ users by integrating financial services into a unified interface, driving 20% higher interaction rates using Java and Kotlin.",
      "Upgraded 30% of legacy SDKs to API 31, resolving compatibility issues and ensuring fault-tolerant operations for millions of transactions through automated test coverage.",
      "Implemented automated testing pipelines using Jenkins and integrated with CI/CD workflows, increasing release stability by 95%.",
    ],
  },
  {
    companyName: "Rosemary",
    jobTitle: "Full-Stack Engineer",
    workPeriod: "July 2021 - November 2021",
    jobDescription: [
      "Developed a full-stack e-commerce mobile application for Android and iOS, enhancing scalability and user experience using Flutter, Express.js, Heroku, AWS, and MongoDB to support increasing user traffic.",
      "Engineered a NodeJS backend server, implementing parallel network call algorithms such as concurrent API requests and load balancing, resulting in a 50% improvement in startup time and significant performance boost.",
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
    projectId: "dp-visualizer",
    projectName: "DP Visualizer",
    projectForwardPicture: "/dpvisualizer_portfolio.png",
    projectDescription: `DP Visualizer is an interactive tool designed to help users understand Dynamic Programming by breaking down problems step by step. Inspired by the struggle of grasping DP concepts, this tool provides a visual representation of how subproblems build up to the optimal solution.
    
Currently, it supports the Unique Paths problem, allowing users to see how recursive and memoized approaches unfold in real-time. The goal is to expand the tool to cover more DP problems, uncover patterns, and make Dynamic Programming more intuitive and engaging for learners.`,
    projectLink: "https://dpvisualizer.com",
    skillsUtilized: ["React", "TypeScript", "Framer", "Next.js"],
    activeUsers: "312",
    imageSections: [
      {
        image: "/dpvisualizer/dpvisualizer_1.png",
        title: "Recursive DFS Visualization of the Unique Paths",
        text: `See each step of the recursive DFS solution unfold, creating foundation to understanding the DP visualization.`,
      },
      {
        image: "/dpvisualizer/dpvisualizer_2.png",
        title: "DP Visualization of the Unique Paths",
        text: `Experiment with the DP visualization to better understand how one of the complex topics in algorithms works.`,
      },
    ],
  },
  {
    projectId: "go-file-compress",
    projectName: "Go File Compress",
    projectForwardPicture: "/gofilecompress_portfolio.png",
    projectDescription: `A high-performance image compression service built with Go, designed to process large-scale image compression tasks efficiently on Google Cloud Platform (GCP). Supports both lossless (PNG standard library) and lossy (PNGQuant) compression strategies. Implements RESTful API with CORS support, health checks, and load testing using K6.
The infrastructure utilizes Google Compute Engine (GCE) with Managed Instance Groups (MIGs) for auto-scaling, an HTTP/HTTPS Load Balancer for request distribution, and Cloud NAT for secure backend services. Security is enforced using Cloud Armor, IAM, and firewall rules. The application is containerized with Docker and managed via Artifact Registry for deployment.`,
    projectLink:
      "https://github.com/diasmashikov/go-compressor?tab=readme-ov-file",
    skillsUtilized: ["Golang", "GCP", "Docker"],
    activeUsers: "112",
    imageSections: [
      {
        image: "/gofilecompress/gompress_result.png",
        title: "80% savings on the png file size",
        text: `Utilizing C programming language pngquant libary to save up around 80% of the image size without any loss in quality.`,
      },
    ],
  },
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
  "Shadcn",
  "Zustand",
  "Redux",
];

export const backendSkills = [
  "Golang",
  "Python FastAPI",
  "ExpressJS",
  "Java Spring Boot",
  "MongoDB",
  "PostgreSQL",
  "Clickhouse",
  "PgBouncer",
  "Microservices",
  "Postman",
  "k6",
  "Nginx",
  "gRPC",
  "Redis",
  "RabbitMQ",
];

export const devTools = [
  "Docker",
  "Kubernetes",
  "Grafana",
  "Prometheus",
  "Linux",
  "GitHub Actions",
  "AWS",
  "GCP",
  "Postman",
  "Terraform",
  "Ansible",
];
