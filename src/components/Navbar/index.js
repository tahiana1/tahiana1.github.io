import { lazy } from "react";
import RenderComponent from "../../utils";
const LazyNavbar = lazy(() =>
  import(/* webpackChunkName: "Navbar" */ "./Navbar")
);

export default function Navbar(props) {
  return (
    // Displays <Spinner> until OtherComponent loads
    <RenderComponent Component={LazyNavbar} {...props} />
  );
}
