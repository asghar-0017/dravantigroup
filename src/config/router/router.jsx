import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const Home = lazy(() => import("../../pages/home/home"));
const About = lazy(() => import("../../pages/about/about"));
const Team = lazy(() => import("../../pages/team/team"));
const News = lazy(() => import("../../pages/news/news"));
const Navbar = lazy(() => import("../../components/navbar/navbar"));
const Footer = lazy(() => import("../../components/footer/footer"));
const InterMTraders = lazy(() => import("../../pages/partner1/InterMTraders"));
const MBMEgroup =lazy(()=> import("../../pages/partner1/MBMEgroup"))
const Privacy = lazy(() => import("../../pages/privacy/privacy"));
const GulfInternational = lazy(() => import("../../pages/partner1/GulfInternational"));
const Cookies = lazy(() => import("../../pages/cookies/Cookies"));
const Terms = lazy(() => import("../../pages/Terms/Terms"));


const Router = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />

          {/* About Page */}
          <Route path="/about" element={<About />} />

          {/* Team Page */}
          <Route path="/team" element={<Team />} />

          {/* News Page */}
          <Route path="/news" element={<News />} />
          {/* sub1 Page */}
          <Route path="/interMTraders" element={<InterMTraders/>} />
          <Route path="/MBMEgroup" element={<MBMEgroup/>} />
          <Route path="/GulfInternational" element={<GulfInternational/>} />
          {/* Footer Pages */}
          <Route path="/privacy-policy" element={<Privacy/>} />
          <Route path="/cookies-policy" element={<Cookies/>} />
          <Route path="/terms-and-conditions" element={<Terms/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Router;
