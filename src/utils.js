import { Suspense } from "react";
//TODO : Add IntersectionObserver to lazy load components
export default function Component({ Component, ...props }) {
  return (
    <Suspense fallback={<h3>loading</h3>}>
      <div>
        <Component {...props} />
      </div>
    </Suspense>
  );
}
