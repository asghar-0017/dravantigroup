import React, { lazy, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Cursor } from "./animation/cursor/cursor";
import Loader from "./components/loader/loader";

const Router = lazy(() => import("./config/router/router"));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Cursor />
      <Router />
    </Suspense>
  );
}

export default App;
