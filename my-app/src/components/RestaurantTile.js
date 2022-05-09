import React from "react";

function RestaurantTile({res}) {
  
  const {id, name, image, location, phone, menu} = res
  
  return (
    <div>
      <h3>{name}</h3>
      <img src={image} alt={name} height={250}/>
      <br />
      <button id='like button'>👍</button>
      <button id='dislike button'>👎</button>
    </div>
  );
}

export default RestaurantTile;
