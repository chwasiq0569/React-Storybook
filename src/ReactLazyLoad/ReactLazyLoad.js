import React, { lazy, Suspense } from "react";
const LazyHome = lazy(() => import("./LazyHome")); //importing to lazy load & will import asyncronasly
const LazyAboutPage = lazy(() => import("./LazyAbout")); // will import asyncronasly
const ReactLazyLoad = () => {
  return (
    <div>
      <h1>React Lazy Loading Code Splitting</h1>
      <Suspense fallback={<div>LazyAboutPage is Loading</div>}>
        <LazyAboutPage /> {/* this will load when needed */}
      </Suspense>
      <Suspense fallback={<div>Home is Loading</div>}>
        <LazyHome /> {/* this will load when needed */}
      </Suspense>
    </div>
  );
};

export default ReactLazyLoad;
