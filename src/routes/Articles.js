import React from "react";
import HeroImg2 from "../components/Images/HeroImg2";
import Articles from "../components/Articles/Articles";

const ArticlesPage = () => {
  return (
    <div>
      <HeroImg2 heading="ARTICLES" text="My thoughts and insights on technology" />
      <Articles />
    </div>
  );
};

export default ArticlesPage; 