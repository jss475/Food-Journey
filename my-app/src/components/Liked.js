import React, { useContext } from "react";
import RestaurantTile from "./RestaurantTile";

function Liked({
  likedRes,
  handleLike,
  handleDisLike,
  disable,
  loggedIn,
  disableDislike,
}) {
  //if statement based off of true/false on logged in or not

  const restuarantArray = likedRes.map((res) => {
    return (
      <RestaurantTile
        key={res.id}
        res={res}
        handleLike={handleLike}
        handleDisLike={handleDisLike}
        disable={disable}
        loggedIn={loggedIn}
      />
    );
  });

  return (
    <>
      {<h2 id="liked_title">Liked Restaurants!</h2>}
      <div className="view_port">{restuarantArray}</div>
    </>
  );
}

export default Liked;
