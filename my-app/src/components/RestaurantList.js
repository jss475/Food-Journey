import React, {useState, useEffect} from "react";
import NotLiked from "./NotLiked";
import Liked from "./Liked";

function RestaurantList({}) {
  
  //make a useState to control the list of all restaurants
  const [allRestaurants, setAllRestaurants] = useState([])

  //make a useEffect to pull all the restaurants
  useEffect(()=> {
    fetch('http://localhost:3000/restaurants')
      .then(resp => resp.json())
      .then(data => setAllRestaurants(data))
  },[])

  return (
      <>
        <Liked allRestaurants={allRestaurants} />
        <NotLiked allRestaurants={allRestaurants}/>
      </>
    );
}

export default RestaurantList;
