import React from "react";
import RestaurantTile from "./RestaurantTile";

function NotLiked({
  allRestaurants,
  handleLike,
  handleDisLike,
  disableDislike,
}) {
  //if statement based off of true/false on logged in or not

  const restuarantArray = allRestaurants.map((res) => {
    return (
      <RestaurantTile
        key={res.id}
        res={res}
        handleLike={handleLike}
        handleDisLike={handleDisLike}
        disableDislike={disableDislike}
      />
    );
  });

  return (
    <>
      <h2>Check These Out!</h2>
      {restuarantArray}
    </>
  );
}

export default NotLiked;
