import "./TechStackStyles.css";

import React from "react";
import TechCard from "./TechCard";
import TechStackData from "./techStackData";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const TechStackContent = () => {
    return (
        <div className="tech-stack">
            <h1 className="tech-stack-title">My Tech Stack</h1>
            <div className="tech-stack-container">
                {TechStackData.map((val, ind) => {
                    return (
                        <TechCard
                            key={ind}
                            imgsrc={val.imgsrc}
                            title={val.title}
                        />
                    )
                })}
            </div>
        </div>
    );
};

export default TechStackContent;