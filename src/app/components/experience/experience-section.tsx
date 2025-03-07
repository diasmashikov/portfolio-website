import React, { useEffect, useRef, useState } from "react";
import { experiences } from "@/content";
import ExperienceComponent from "./experience-component";
import SectionTitle from "../section-title";

type ExperienceSectionProps = {
  classNameDimensions: string;
};

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  classNameDimensions,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const experiencesRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let maxProgress = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const visibleRatio = entry.intersectionRatio;
            maxProgress = Math.max(maxProgress, visibleRatio);
            setProgress(maxProgress);
          } else {
            // If it's not intersecting, we're either above or below the section
            const boundingRect = entry.boundingClientRect;
            const windowHeight = window.innerHeight;

            if (boundingRect.top >= windowHeight) {
              // We're above the section, reset progress
              maxProgress = 0;
              setProgress(0);
            } else {
              // We're below the section, keep maximum progress
              setProgress(maxProgress);
            }
          }
        });
      },
      {
        threshold: Array.from({ length: 200 }, (_, i) => i / 200),
        root: null,
        rootMargin: "0px",
      }
    );

    if (experiencesRef.current) {
      observer.observe(experiencesRef.current);
    }

    return () => {
      if (experiencesRef.current) {
        observer.unobserve(experiencesRef.current);
      }
    };
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className={`flex flex-col relative px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 py-12 ${classNameDimensions}`}
    >
      <SectionTitle title="Experience" />
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-300 hidden sm:block">
          <div
            className="bg-blue-500 w-full transition-all duration-300 ease-out"
            style={{ height: `${progress * 200}%` }}
          ></div>
        </div>
        <div ref={experiencesRef} className="sm:pl-8">
          {experiences.map((experience, index) => (
            <ExperienceComponent key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
