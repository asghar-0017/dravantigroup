import React, { lazy, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Cursor } from "./animation/cursor/cursor";

const Router = lazy(() => import("./config/router/router"));

const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Cursor />
      <Router />
    </Suspense>
  );
};

export default App;
