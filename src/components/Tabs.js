import React, { useEffect, useState } from "react";
import { CiPizza } from "react-icons/ci";
import { GiFruitBowl, GiNoodles, GiCheckMark } from "react-icons/gi";
import { MdOutlineIcecream } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { getRecipesById } from "../redux/features/receipeSlice";

const Tabs = () => {
  const dispatch = useDispatch();
  const dishData = useSelector((state) => state.recipes.recipeById);
  const [active, setActive] = useState("Pizza");
  const [tabLabel, setTabLabel] = useState([
    {
      name: "Pizza",
      icons: <CiPizza />,
      id: "f4ce5814f10c79bf856f7d40b2bade83",
    },
    {
      name: "Noodles",
      icons: <GiNoodles />,
      id: "b2a6ba8505c4cd4cb2958b1a467153bf",
    },
    {
      name: "Desert",
      icons: <GiFruitBowl />,
      id: "e857e16b63edec046be38f8f160b53d8",
    },
    {
      name: "IceCream",
      icons: <MdOutlineIcecream />,
      id: "c0987781ce43dece75272c4ddd6d17f3",
    },
  ]);

  useEffect(() => {
    dispatch(getRecipesById(tabLabel[0].id));
  }, [dispatch, tabLabel]);

  console.log(dishData);
  const handleClick = (name, id) => {
    setActive(name);
    dispatch(getRecipesById(id));
  };

  return (
    <div className="container">
      <h1 className="recipeHeading">What would you like to have!</h1>
      <div className="tabs">
        {tabLabel.map((tab, index) => (
          <div
            onClick={() => handleClick(tab.name, tab.id)}
            key={index}
            className={`tablist ${active === tab.name ? "active" : ""}`}
          >
            {tab.icons}
            <span>{tab.name}</span>
          </div>
        ))}
      </div>
      <div className="recipe_banner">
        {dishData.length !== 0 && (
          <>
            <div className="left-col">
              <span className="badge">
                {dishData.recipe.cuisineType[0].toUpperCase()}
              </span>
              <h1>{dishData.recipe.label}</h1>
              <p>
                <strong>Recipe by:</strong>
                <small>{dishData.recipe.source}</small>
              </p>
              <h3>Ingredients</h3>
              <div className="ingredients">
                <ul>
                  {dishData.recipe.ingredientLines.map((ingredient, index) => (
                    <li key={index}>
                      <GiCheckMark size="18px" color="#6fcb9f" />
                      &nbsp;<span>{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="right-col">
              <div className="image-wrapper">
                <img src={dishData.recipe.image} alt={dishData.recipe.label} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Tabs;
