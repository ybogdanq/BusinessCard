import React from "react";
import ContentHeaderSide from "./ContentHeaderSide";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import ProjectsSection from "./ProjectsSection";

const ContentSide: React.FC = () => {
  return (
    <article className="resume-contentside">
      <ContentHeaderSide />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
    </article>
  );
};

export default ContentSide;
