import { ProjectShowcaseTypes } from "../components/ProjectShowcase";
import { projectsBGs } from "../assets/ProjectsShowcase";
import {
  faSass,
  faJs,
  faGithub,
  faVuejs,
  faCss3,
  faBootstrap,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

export const projectsCollection = [
  {
    projectName: "WeatherApp-R",
    backgroundPath: projectsBGs.weatherApp,
    technologiesIcons: [faSass, faJs, faReact, faGithub],
  },
  {
    projectName: "MoviesApp",
    backgroundPath: projectsBGs.moviesApp,
    technologiesIcons: [faCss3, faJs, faVuejs, faGithub],
  },
  {
    projectName: "edMate",
    backgroundPath: projectsBGs.edMate,
    technologiesIcons: [faSass, faBootstrap, faJs, faGithub],
  },
  {
    projectName: "SubsApp",
    backgroundPath: projectsBGs.subsApp,
    technologiesIcons: [faCss3, faJs, faVuejs, faGithub],
  },
] as ProjectShowcaseTypes[];
