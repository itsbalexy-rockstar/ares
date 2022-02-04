import axios from "axios";
import React from "react";
import { useState } from "react";
import { useForm } from "../../../hooks/useForm";
import { RecipeCard } from "./RecipeCard";

const RecipesResults = () => {
  const [formValues, handleInputChange] = useForm({
    searchText: ''
  })
  const {searchText} = formValues
  const [recipes, setRecipes] = useState([]);
  const url =
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=2cec18fe58c24e12bc505e7008d347d5&query=${searchText}&number=15&addRecipeInformation=true`
  
  const handleSearch = (e) => {
    e.preventDefault()
    axios.get(url).then(({ data }) => {
      setRecipes(data.results);
    });
  }

  return (

    <div className="recipes__search">
      <form 
      className="ares__search"
      onSubmit={handleSearch}
      >
        <div className="ares__search-title">
          <h3>¿Tienes algún plato en mente?</h3>
        </div>
        <input
          type="text"
          name="searchText"
          className="ares__search-input"
          autoComplete="off"
          value={searchText}
          onChange={handleInputChange}
        />
        <button type="submit" className="ares__search-icon">
          Buscar
        </button>
      </form>
      <div className="recipes__grid animate__animated animate__rubberBand">
        {recipes.map((recipe) => {
          return <RecipeCard key={recipe.id} {...recipe} />;
        })}
      </div>
    </div>
  );
};

export default RecipesResults;
