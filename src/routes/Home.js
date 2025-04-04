import React from "react";
import HeroImg from "../components/Images/HeroImg";
import Work from "../components/Projects/Work";
import AboutContent from "../components/About/AboutContent";
import Certifications from "../components/Certifications/Certifications";

const Home = () => {
  return (
    <div>
      <HeroImg />
      <AboutContent />
      <Certifications />
      <Work />
    </div>
  );
};

export default Home;
