import React, { lazy, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Router = lazy(() => import("./config/router/router"));

const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Router />
    </Suspense>
  );
};

export default App;
