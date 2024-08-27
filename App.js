import React from "react";
import PropTypes from "prop-types";
import { FaClock, FaUtensils, FaBurn, FaThermometerHalf } from "react-icons/fa";

const RecipeInfo = ({ text, icon: Icon }) => {
  return (
    <div className="recipe-info">
      <Icon />
      <span>{text}</span>
    </div>
  );
};

RecipeInfo.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
};

const Recipe = ({ recipe }) => {
  const { name, time, servings, calories, difficulty, image } = recipe;
  return (
    <div className="recipe">
      <img src={image} alt={name} className="recipe-image" />
      <h2>{name}</h2>
      <RecipeInfo text={`Time: ${time} mins`} icon={FaClock} />
      <RecipeInfo text={`Servings: ${servings}`} icon={FaUtensils} />
      <RecipeInfo text={`Calories: ${calories}`} icon={FaBurn} />
      <RecipeInfo text={`Difficulty: ${difficulty}`} icon={FaThermometerHalf} />
    </div>
  );
};

const App = () => {
  const recipes = [
    {
      name: "Smoked salmon burger",
      time: "20",
      servings: 6,
      calories: 210,
      difficulty: 1,
      image:
        "https://assets.bonappetit.com/photos/62cc4eca787a907e535e8e7f/1:1/w_2580%2Cc_limit/0711-black-bean-burger-lede.jpg",
    },
    {
      name: "Tomatoes With Creamy Feta",
      time: "15",
      servings: 3,
      calories: 600,
      difficulty: 0,
      image:
        "https://assets.bonappetit.com/photos/62b4926736e0c90647da6b71/1:1/w_2580%2Cc_limit/0623-diana-yen-tomato-recipe-lede.jpg",
    },
    {
      name: "Spicy potato salad",
      time: "30",
      servings: 2,
      calories: 320,
      difficulty: 0,
      image:
        "https://assets.bonappetit.com/photos/62bf35ae872a6cfbb260f286/1:1/w_2580%2Cc_limit/0701-tj-recipe-potato-v2.jpg",
    },
    {
      name: "Chicken Biryani",
      time: "40",
      servings: 4,
      calories: 700,
      difficulty: 2,
      image:
        "https://assets.bonappetit.com/photos/5db1b689823b960008d8468d/1:1/w_2580%2Cc_limit/Chicken-Biryani-Lede-NEW.jpg",
    },
  ];

  return (
    <div className="app">
      <h1>Recipe App</h1>
      <div className="recipes">
        {recipes.map((recipe, index) => (
          <Recipe key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default App;
