import React from "react";
import HeroImg2 from "../components/HeroImg2";
import AboutContent from "../components/AboutContent";

const About = () => {
  return (
    <div>
      <HeroImg2 heading="ABOUT." text="Im a friendly Front-End Developer." />
      <AboutContent />
    </div>
  );
};

export default About;
