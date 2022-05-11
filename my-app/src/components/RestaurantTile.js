import React, { useState } from "react";

function RestaurantTile({
  res,
  handleLike,
  handleDisLike,
  disable,
  disableDislike,
  loggedIn,
}) {
  const { id, name, image, location, phone, menu } = res;

  return (
    <div>
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