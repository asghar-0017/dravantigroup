import React, { lazy, Suspense } from "react";

const Router = lazy(() => import("./config/router/router"));

const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Router />
    </Suspense>
  );
};

export default App;
