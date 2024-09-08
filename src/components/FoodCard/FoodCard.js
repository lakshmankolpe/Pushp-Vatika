import React from "react";
import "./FoodCard.css";
import { THEME,CARD_DIRECTION,CARD_BUTTON_TEXT } from "../../config/data";

function FoodCard({ title, price, description, imgUrl }) {
  return (
    <div className="food-card" style={{display:"flex", flexDirection:CARD_DIRECTION}}>
      <img src={imgUrl} className="food-card-image" alt={title} />
      <h1 className="food-card-title" style={{ color: THEME.Highlight }}>
        {title}
      </h1>

      <div className="food-card-body">
        <span>{description}</span>
        <p>₹{price}</p>
        <button
          type="button"
          className="food-card-btn"
          style={{ backgroundColor: THEME.Highlight }}
        >
          {CARD_BUTTON_TEXT}
        </button>
      </div>
    </div>
  );
}

export default FoodCard;
