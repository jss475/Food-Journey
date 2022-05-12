import React, { useEffect, useState } from "react";

function RestaurantTile({
  res,
  handleLike,
  handleDisLike,
  disable,
  disableDislike,
  loggedIn,
}) {
  const { id, name, image, location, phone, menu } = res;
  //disable is like, initially set to false so that it's not disabled
  //disableDislike is dislike, initially set to true so that you can't dislike what's not liked
  
  return (
    <div className="media-element">
      <h3>{name}</h3>
      <img src={image} alt={name} height={250} />
      <br />
      <button
        id="like_button"
        disabled={loggedIn ? disable : !disable}
        onClick={() => {
          handleLike(res);
        }}
      >
        👍
      </button>
      <button
        id="dislike_button"
        disabled={disableDislike}
        onClick={() => handleDisLike(res)}
      >
        👎
      </button>
    </div>
  );
}

export default RestaurantTile;
