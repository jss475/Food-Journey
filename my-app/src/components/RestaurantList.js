import React, {useState, useEffect} from "react";
import RestaurantTile from "./RestaurantTile";
import NotLiked from "./NotLiked";
import Liked from "./Liked";

function RestaurantList() {
  
  const [allRestaurants, setAllRestaurants] = useState([])

  useEffect(()=> {
    fetch('http://localhost:3000/restaurants')
      .then(resp => resp.json())
      .then(data => setAllRestaurants(data))
  },[])

  const restuarantArray = allRestaurants.map(res => {
    return <RestaurantTile key={res.id} res={res} />
  })

  return (
      <>
        <Liked allRestaurants={allRestaurants}/>
        <NotLiked allRestaurants={allRestaurants}/>
      </>
    );
}

export default RestaurantList;
