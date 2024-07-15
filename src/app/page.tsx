// components/Home.tsx
"use client";
import { AiFillAmazonCircle } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

import { useState } from "react";
import { ReactTyped } from "react-typed";
import ExperienceComponent from "./components/experience/experience-component";
import { experiences } from "@/content";
import ExperienceSection from "./components/experience/experience-section";
import GreetingSection from "./components/greeting/greeting-section";
import ProjectsSection from "./components/projects/projects-section";
import OpenSourceSection from "./components/open_source/open-source-section";
import ContactMeSection from "./components/contactme/contact-me-section";
import SkillsSection from "./components/skills/skills-section";
import Header from "./components/header";

export default function Home() {
  return (
    <main id="start" className="flex flex-col  min-h-screen">
      <Header></Header>
      <GreetingSection classNameDimensions="min-h-screen" />
      <SkillsSection />
      <ExperienceSection classNameDimensions="pb-40 px-36" />
      <ProjectsSection />
      <OpenSourceSection />
      <ContactMeSection />
    </main>
  );
}
