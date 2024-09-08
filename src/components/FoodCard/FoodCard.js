import React from "react";
import "./FoodCard.css";
import VegIcon from "./icons8-veg-48.png";
import NonVegIcon from "./icons8-non-veg-48.png";
import { THEME } from "../../config/data";

function FoodCard({ title, price, description, isVeg, imgUrl }) {
  return (
    <div className="food-card">
      <img src={imgUrl} className="food-card-image" alt="" />
      <h1 className="food-card-title" style={{ color: THEME.Highlight}}>{title} </h1>

      <span>{description}</span>
      <img src={isVeg ? VegIcon : NonVegIcon} className="veg-icon" />
      <p>₹{price}</p>
      <button type="button " className="food-card-btn" style={{backgroundColor:THEME.Highlight}}>
        By Now
      </button>
    </div>
  );
}

export default FoodCard;
