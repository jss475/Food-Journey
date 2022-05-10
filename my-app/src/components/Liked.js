import React, { useContext } from "react";
import RestaurantTile from "./RestaurantTile";

function Liked({ likedRes, handleLike, handleDisLike }) {
  //if statement based off of true/false on logged in or not

  const restuarantArray = likedRes.map((res) => {
    return (
      <RestaurantTile
        key={res.id}
        res={res}
        handleLike={handleLike}
        handleDisLike={handleDisLike}
      />
    );
  });

  return (
    <>
      <h2>Liked Restaurants!</h2>
      {restuarantArray}
    </>
  );
}

export default Liked;
