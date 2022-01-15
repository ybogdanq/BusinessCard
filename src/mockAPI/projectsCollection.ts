import { ProjectShowcaseTypes } from "../components/ProjectShowcase";
import { projectsBGs } from "../assets/ProjectsShowcase";
import {
  faSass,
  faJs,
  faGithub,
  faVuejs,
  faCss3,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";

export const projectsCollection = [
  {
    projectName: "MoviesApp",
    backgroundPath: projectsBGs.moviesApp,
    technologiesIcons: [faCss3, faJs, faVuejs, faGithub],
  },
  {
    projectName: "EdMate",
    backgroundPath: projectsBGs.edMate,
    technologiesIcons: [faSass, faBootstrap, faJs, faGithub],
  },
  {
    projectName: "WeatherApp",
    backgroundPath: projectsBGs.weatherApp,
    technologiesIcons: [faCss3, faJs, faVuejs, faGithub],
  },
  {
    projectName: "SubsApp",
    backgroundPath: projectsBGs.subsApp,
    technologiesIcons: [faCss3, faJs, faVuejs, faGithub],
  },
] as ProjectShowcaseTypes[];
