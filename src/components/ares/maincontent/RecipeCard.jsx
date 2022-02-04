import React from "react";
import { createContext } from "react";
import { Link } from "react-router-dom";

export const RecipeCard = ({id, title, image, veryPopular, veryHealthy, sourceUrl, healthScore, readyInMinutes, pricePerServing}) => {
  const handleClick = (e) => {
    const btnItem = e.target.closest('.card__item')
    const Context = createContext(btnItem)
  }
  return (
    <div className="card__container card__item" id={id}>
      <h2 className="card__title">{title}</h2>
      <img
        src={image}
        alt=""
        className="card__image"
      />
      <div className="card__features">
        {veryPopular && <p>&#11088; Muy popular</p>}
        {veryHealthy && <p>&#127793; Muy saludable</p>}
        <h4>Healthscore: {healthScore}</h4>
        <h4>Time: {readyInMinutes}</h4>
        <h4>Price: {pricePerServing}</h4>
      </div>
      <div className="card__buttons">
        <Link to={sourceUrl} className="card__btn">Ver más</Link>
        <button className="card__btn" onClick={handleClick}>Añadir</button>
      </div>
    </div>
  );
};
