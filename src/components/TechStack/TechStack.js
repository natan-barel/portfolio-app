import "./TechStackStyles.css";

import React from "react";
import TechCarousel from './TechCarousel';
import TechStackData from "./techStackData";

const TechStackContent = () => {
    const chunkSize = Math.ceil(TechStackData.length / 3);
    return (
        <div className="tech-stack">
            <h1 className="tech-stack-title">My Tech Stack</h1>
            <TechCarousel data={TechStackData.slice(0, chunkSize)}></TechCarousel>
            <TechCarousel data={TechStackData.slice(chunkSize, chunkSize * 2)} rtl={true}></TechCarousel>
            <TechCarousel data={TechStackData.slice(chunkSize * 2)}></TechCarousel>
        </div>
    );
};

export default TechStackContent;