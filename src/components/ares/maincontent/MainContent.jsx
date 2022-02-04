import React from "react";
import RecipesResults from "./RecipesResults";

const MainContent = () => {
  return (
    <div className="main__container">
      <div className="main__navbar">
        <h3 className="main__logo">Alexander Restaurantes</h3>
        <h3>Fecha</h3>
      </div>
      <RecipesResults />
    </div>
  );
};

export default MainContent;
