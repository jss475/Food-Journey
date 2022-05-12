import React from "react";
import RestaurantTile from "./RestaurantTile";

function NotLiked({
  dislikedRes,
  handleLike,
  handleDisLike,
  disableDislike,
  disable,
  loggedIn,
}) {
  //if statement based off of true/false on logged in or not

  const restuarantArray = dislikedRes.map((res) => {
    return (
      <RestaurantTile
        key={res.id}
        res={res}
        handleLike={handleLike}
        handleDisLike={handleDisLike}
        disable={disableDislike}
        loggedIn={loggedIn}
      />
    );
  });

  return (
    <>
      <h2 id="not_like_title">Check These Out!</h2>
      <div className="view_port">{restuarantArray}</div>
    </>
  );
}

export default NotLiked;
