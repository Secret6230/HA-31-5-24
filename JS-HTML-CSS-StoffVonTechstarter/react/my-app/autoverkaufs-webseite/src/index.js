import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import houses from "./houses.js"
import Listing from "./Listing.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <div style={{color: "red"}}/>


  {houses.map((house,index) =>
  
  <Listing key={index} Name={house.Name} Preis={house.Preis} imageURL={house.img} />

  )};


  </>


);