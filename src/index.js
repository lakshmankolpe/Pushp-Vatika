import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "./views/Home/Home"
import About from "./views/About/About"
import FoodCard from "./components/FoodCard/FoodCard";
import { THEME } from "./config/data";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/about",
        element:<About/>
    },
    {
        path:"/foodcard",
        element:<FoodCard/>
    }
])
root.render(
    <div style={{ backgroundColor: THEME.Main }}>
      <RouterProvider router={router} />
    </div>
  );
  