import React, { lazy } from "react";
import DravantiToken from "../../components/dravantiToken/dravantiToken";
import { TableSection } from "../../components/table/table";
import InvestorRegistrationForm from "../../components/investorRegistration/investorRegistration";
import Counter from "../../components/counter/counter";
import DravantiLaunchAndScalability from "../../components/dravantiLaunchAndScalability/dravantiLaunchAndScalability";
const History = lazy(() => import("../../components/history/history"));
import CorePartners from "../../components/corePartners/corePartners";
import Contact from "../../components/contact/contact";
import HeroSection from "../../components/heroSection/herSection";

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
      <TableSection content={sampleContent} />
      <DravantiToken />
      <DravantiLaunchAndScalability />
      <InvestorRegistrationForm />
      <Counter />
      <CorePartners />
      <Contact />
    </div>
  );
};

export default Home;
