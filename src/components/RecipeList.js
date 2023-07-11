import React, { useEffect, useState } from "react";
import { getRecipes } from "../redux/features/receipeSlice";
import { useSelector, useDispatch } from "react-redux";
import { BsSearch } from "react-icons/bs";

const RecipeList = () => {
  const dispatch = useDispatch();

  const hits = useSelector((state) => state.recipes.recipe.hits);
  const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState("Pasta");

  const searchRecipe = (searchkeyWord) => {
    dispatch(getRecipes(searchkeyWord));
    setSearchTerm("");
  };

  useEffect(() => {
    dispatch(getRecipes(query));
  }, [query, dispatch]);

  const searchWord = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container">
      <div className="heading-line">
        <strong>Search Recipes</strong>
        <div className="input-wrapper">
          <input
            onChange={searchWord}
            value={searchTerm}
            type="text"
            placeholder="Search you recipe"
          />
          <button onClick={() => searchRecipe(searchTerm)}>
            <BsSearch />
          </button>
        </div>
      </div>
      <div className="flexbox">
        {hits &&
          hits.map((item, index) => (
            <div key={index} className="flexItem">
              <div className="img-wrapper">
                <img src={item.recipe.image} alt={item.recipe.label} />
              </div>
              <p>{item.recipe.label}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RecipeList;
