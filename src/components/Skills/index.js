import { lazy } from "react";
import RenderComponent from "../../utils";
const LazySkills = lazy(() =>
  import(/* webpackChunkName: "Skills" */ "./Skills")
);

export default function Skills(props) {
  return (
    // Displays <Spinner> until OtherComponent loads
    <RenderComponent Component={LazySkills} {...props} />
  );
}
