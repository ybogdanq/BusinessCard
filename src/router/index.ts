import Home from "../pages/Home";
import Resume from "../pages/Resume";
import { IRouter, RouteNames } from "./types";

export const routes: IRouter[] = [
  { path: RouteNames.Home, element: Home },
  { path: RouteNames.Resume, element: Resume },
];
