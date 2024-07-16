import { useEffect, useRef, useState } from "react";

const ExperienceComponent: React.FC<ExperienceDetails> = ({
  companyName,
  jobTitle,
  workPeriod,
  jobDescription,
}) => {
  return (
    <div className="relative flex flex-col pl-8 mb-8">
      <CompanyName className="" companyName={companyName} />
      <div className="flex flex-row items-center justify-between pb-2">
        <JobTitle jobTitle={jobTitle} />
        <WorkPeriod workPeriod={workPeriod} />
      </div>
      <JobDescription jobDescription={jobDescription} />
    </div>
  );
};

type CompanyNameProps = {
  companyName: string;
  className?: string;
};

const CompanyName: React.FC<CompanyNameProps> = ({
  companyName,
  className,
}) => {
  return (
    <h1
      className={`text-2xl font-semibold text-primary-text-color ${className}`}
    >
      {companyName}
    </h1>
  );
};

type JobTitleProps = {
  jobTitle: string;
};

const JobTitle: React.FC<JobTitleProps> = ({ jobTitle }) => {
  return <h2 className="text-lg text-primary-text-color">{jobTitle}</h2>;
};

type WorkPeriodProps = {
  workPeriod: string;
};

const WorkPeriod: React.FC<WorkPeriodProps> = ({ workPeriod }) => {
  return <p className="text-lg text-primary-text-color">{workPeriod}</p>;
};

export type JobDescriptionProps = {
  jobDescription: string[];
};

export const JobDescription: React.FC<JobDescriptionProps> = ({
  jobDescription,
}) => {
  return (
    <ul className="list-disc list-inside">
      {jobDescription.map((bulletPoint) => (
        <li className="pb-2 text-secondary-text-color " key={bulletPoint}>
          {bulletPoint}
        </li>
      ))}
    </ul>
  );
};

export default ExperienceComponent;
