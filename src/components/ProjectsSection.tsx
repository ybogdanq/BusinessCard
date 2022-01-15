import React from "react";
import { projectsCollection } from "../mockAPI/projectsCollection";
import ProjectShowcase from "./ProjectShowcase";

const ProjectsSection: React.FC = () => {
  return (
    <section>
      <h1 className="heading">Projects</h1>
      <div className="projects-wrapper">
        {projectsCollection.length &&
          projectsCollection.map((proj, index) => (
            <div key={index} className="project-showcase__item">
              <ProjectShowcase
                projectName={proj.projectName}
                technologiesIcons={proj.technologiesIcons}
                backgroundPath={proj.backgroundPath}
              />
            </div>
          ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
