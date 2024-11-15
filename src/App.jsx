import React, { lazy, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Cursor } from "./animation/cursor/cursor";
import Loader from "./components/loader/loader";
// import ScrollToTop from "./components/ScrollUp/ScrollToTop";

const Router = lazy(() => import("./config/router/router"));

const App = () => {
  return (
    
    <Suspense fallback={<Loader />}>
      {/* <ScrollToTop/> */}
      <Cursor />
      <Router />
    </Suspense>
  );
}

export default App;
