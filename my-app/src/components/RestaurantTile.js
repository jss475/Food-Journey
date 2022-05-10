import React from "react";

function RestaurantTile({ res, handleLike, handleDisLike }) {
  const { id, name, image, location, phone, menu } = res;

  return (
    <div>
      <h3>{name}</h3>
      <img src={image} alt={name} height={250} />
      <br />
      <button
        id="like_button"
        onClick={() => {
          handleLike(res);
        }}
      >
        👍
      </button>
      <button id="dislike_button" onClick={() => handleDisLike(res)}>
        👎
      </button>
    </div>
  );
}

export default RestaurantTile;
