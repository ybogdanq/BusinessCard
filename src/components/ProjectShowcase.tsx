import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import cl from "../styles/ProjectShowcase.module.css";

export type ProjectShowcaseTypes = {
  projectName?: string;
  technologiesIcons: IconDefinition[];
  backgroundPath: string;
};

const ProjectShowcase: React.FC<ProjectShowcaseTypes> = ({
  projectName,
  technologiesIcons,
  backgroundPath,
}) => {
  return (
    <div className={cl.showcase__item}>
      <img
        src={backgroundPath}
        className={cl.showcase__item_bg}
        alt={projectName + "background"}
      />
      <div className={cl.showcase__item_technologies}>
        {technologiesIcons.length > 0 &&
          technologiesIcons.map((techIcon, index) => (
            <FontAwesomeIcon
              className={cl.techIcon}
              icon={techIcon}
              key={index}
            />
          ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
