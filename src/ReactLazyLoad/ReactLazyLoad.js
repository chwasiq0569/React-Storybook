import React, { lazy, Suspense } from "react";
const LazyHome = lazy(() => import("./LazyHome")); //importing to lazy load
const LazyAboutPage = lazy(() => import("./LazyAbout"));
const ReactLazyLoad = () => {
  return (
    <div>
      <h1>React Lazy Loading Code Splitting</h1>

      <Suspense fallback={<div>Home is Loading</div>}>
        <LazyHome />
      </Suspense>
    </div>
  );
};

export default ReactLazyLoad;
