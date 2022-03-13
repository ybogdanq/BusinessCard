import React from "react";

export interface IRouter {
  path: string;
  element: React.ComponentType;
}

export enum RouteNames {
  Home = "/BusinessCard/home",
  Resume = "/BusinessCard/resume",
}
