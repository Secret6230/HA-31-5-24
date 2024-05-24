import React from "react";
import ReactDOM from "react-dom/client";
import Listing from "./Listing.js";
import "./Listing.css"
import houses from "./houses.js"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <div className="Farbe">

    {houses.map((house, index) => 
      <Listing key={index} Name={house.Name} Preis={house.Preis} imageURL={house.img}/>
    )}
    
    </div>
  </>
);