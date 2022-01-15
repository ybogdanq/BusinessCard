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
              <a href={"https://ybogdanq.github.io/" + proj.projectName}>
                <ProjectShowcase
                  projectName={proj.projectName}
                  technologiesIcons={proj.technologiesIcons}
                  backgroundPath={proj.backgroundPath}
                />
              </a>
            </div>
          ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
