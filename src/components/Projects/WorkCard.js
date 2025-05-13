import "./WorkCardStyles.css";
import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { MdPageview } from "react-icons/md";

const WorkCard = (props) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="project-card">
      <a href={props.source}>
        <div className="image-container">
          {!imageLoaded && <div className="image-placeholder" />}
          <img
            src={props.imgsrc}
            alt={props.title}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            className={imageLoaded ? 'loaded' : 'loading'}
          />
        </div>
      </a>
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
      </div>
      <div className="pro-btns">
        {props?.view && <a href={props.view} className="btn">
          <MdPageview /> &nbsp;
          View
        </a>}
        <a href={props.source} className="btn">
          <BsGithub /> &nbsp;
          Source
        </a>
      </div>
    </div>
  );
};

export default WorkCard;
