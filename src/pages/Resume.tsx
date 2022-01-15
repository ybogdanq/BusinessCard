import React from "react";
import ContentSide from "../components/ContentSide";
import ResumeSidebar from "../components/ResumeSidebar";
import "./Resume.css";

const Resume: React.FC = () => {
  return (
    <main>
      <ResumeSidebar />
      <ContentSide />
    </main>
  );
};

export default Resume;
