import React, {useState, useEffect, useContext} from "react";
import NotLiked from "./NotLiked";
import Liked from "./Liked";
import {UserLoggedInContext} from '../context/UserLoggedIn'

function RestaurantList({}) {
  const [currentUser] = useContext(UserLoggedInContext)
  console.log(currentUser)
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
