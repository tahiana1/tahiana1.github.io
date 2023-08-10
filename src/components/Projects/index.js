import { lazy } from "react";
import RenderComponent from "../../utils";
const LazyProjects = lazy(() =>
  import(/* webpackChunkName: "Projects" */ "./Projects")
);

export default function Projects() {
  return (
    // Displays <Spinner> until OtherComponent loads
    <RenderComponent Component={LazyProjects} />
  );
}
