import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
import WorkCradData from "./WorkCradData";
import WebCardData from "./WebCradData";

import React from "react";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">DevOps Projects</h1>
      <div className="project-container">
        {WorkCradData.map((val, ind) => {
          return (
            <WorkCard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
              source={val.repo}
            />
          );
        })}
      </div>
      <h1 className="project-heading">Web Projects</h1>
      <div className="project-container">
        {WebCardData.map((val, ind) => {
          return (
            <WorkCard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
              source={val.repo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
