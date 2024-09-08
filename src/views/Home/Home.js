import React from "react";
import "./Home.css";
import FoodCard from "./../../components/FoodCard/FoodCard";
import { flowers,MAIN_TITLE,TAGLINE,THEME } from "../../config/data";

function Home() {
  return (
    <div className="home-container" style={{ backgroundColor: THEME.Main}}>
      <h1 className="main-title" style={{ color: THEME.Highlight,margin:0} }>{MAIN_TITLE}</h1>
      <p className="tagline-title">{TAGLINE}</p>
      
      <div className="food-card-container">
        {flowers.map((fooditem) => {
          return (
            <FoodCard
              title={fooditem.title}
              imgUrl={fooditem.imgUrl}
              price={fooditem.price}
              description={fooditem.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
