import React, { lazy } from "react";
import { TableSection } from "../../components/table/table";

const HeroSection = lazy(() => import("../../components/heroSection/herSection"));
const History = lazy(() => import("../../components/history/history"));
const History2 = lazy(() => import("../../components/history/History2"));
const Contact = lazy(() => import("../../components/contact/contact"));
const CorePartners = lazy(() => import("../../components/corePartners/corePartners"));
const Counter = lazy(() => import("../../components/counter/counter"));
const DravantiToken = lazy(() => import("../../components/dravantiToken/dravantiToken"));
const SubscribeForm = lazy(() => import("../../components/investorRegistration/SubscribeForm"));
const DravantiLaunchAndScalability = lazy(() => import("../../components/dravantiLaunchAndScalability/dravantiLaunchAndScalability"));

// Add keyf

const Home = () => {
  const sampleContent = [
    {
      heading: "Accessibility",
      paragraph:
        "Dravanti Middle East takes a hybrid approach to harness features of utility and security tokens, while backed its token with real-world-assets to the scale associated to Stable Coins. Through permissioned Tokens and Smart Contract wrapping, we aim to create truly global and accessible value.",
    },
    {
      heading: "Integrity",
      paragraph:
        "Dravanti Middle East maintains the highest standards of ethics, integrity and accountability. Backed by a core team of partners and companies, Dravanti’s heritage embodies decades of trust and experience that has delivered value and success across multiple industries.",
    },
    {
      heading: "Inclusivity",
      paragraph:
        "Dravanti Middle East is committed to fostering financial inclusivity through developing highly accessible products and services, providing scalable investment opportunities to all investor types, with a truly global mindset, focused on long-term scalability.",
    },
    {
      heading: "Transparency",
      paragraph:
        "Dravanti Middle East maintains transparency through the development and delivery of full regulatory and legal compliance, ensuring investors have access to accurate, timely, and comprehensive information about our products, processes, and company performance.",
    },
  ];




  return (
    <div>
      <HeroSection />
      <History />
      <History2 />
      {/* <StyleInjector /> */}
      <TableSection content={sampleContent} />
      {/* <DravantiToken /> */}
      {/* <DravantiLaunchAndScalability /> */}
      <Counter bg={"0E2841"}/>
      <CorePartners />
      <Contact />
      <SubscribeForm />
    </div>
  );
};

export default Home;
