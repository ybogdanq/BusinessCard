import React from "react";
import ContactInfo from "./ContactInfo";
import CoreTechnologies from "./CoreTechnologies";
import LanguageSkills from "./LanguageSkills";

const ResumeSidebar: React.FC = () => {
  return (
    <div className="resume-sidebar">
      <ContactInfo />
      <CoreTechnologies />
      <LanguageSkills />
    </div>
  );
};

export default ResumeSidebar;
