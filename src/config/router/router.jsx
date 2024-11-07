import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../../pages/home/home"));
const About = lazy(() => import("../../pages/about/about"));
const Team = lazy(() => import("../../pages/team/team"));
const News = lazy(() => import("../../pages/news/news"));

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />

          {/* About Page */}
          <Route path="/about" element={<About />} />

          {/* Team Page */}
          <Route path="/team" element={<Team />} />

          {/* News Page */}
          <Route path="/news" element={<News />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
