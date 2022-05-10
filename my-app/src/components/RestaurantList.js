import React, { useState, useEffect, useContext, useTransition } from "react";
import NotLiked from "./NotLiked";
import Liked from "./Liked";
import { UserLoggedInContext } from "../context/UserLoggedIn";

function RestaurantList({}) {
  const [currentUser] = useContext(UserLoggedInContext);
  console.log(currentUser);
  //make a useState to control the list of all restaurants
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [likedRes, setLikedRes] = useState([]);
  const [disable, setDisable] = useState(false); //disable Like button after a click
  const [disableDislike, setDisbaleDislike] = useState(true);

  // when like button gets clicked, clicked data gets sent to this function
  function handleLike(data) {
    // filter all restaurant and return all except for the one that we liked
    const filteredLike = allRestaurants.filter((res) => {
      return res.id !== data.id;
    });

    // push the data that we liked to liked restauarant list
    setLikedRes([...likedRes, data]);
    // we set all restaurant to show all excepte for the one that we like
    setAllRestaurants((allRestaurants) => filteredLike);
    //disable the like button
    //document.querySelector("#like_button").disabled = true;
    setDisable(true);
    setDisbaleDislike(false);
  }
  // when dislike button gets clicked, clicked data gets sent to this function
  function handleDisLike(data) {
    console.log(data);
    // filter liked restaurant list and return all except for the one that we disliked
    const filteredRes = likedRes.filter((res) => {
      return res.id !== data.id;
    });
    // updaate liked restaurant list to show all except the one that we disliked
    setLikedRes((likedRes) => filteredRes);
    // we update the data that we disliked to all restaurant list
    setAllRestaurants([...allRestaurants, data]);
    //disable dislike button
    setDisbaleDislike(true);
  }

  //make a useEffect to pull all the restaurants
  useEffect(() => {
    fetch("http://localhost:3000/restaurants")
      .then((resp) => resp.json())
      .then((data) => setAllRestaurants(data));
  }, []);

  return (
    <>
      <Liked
        likedRes={likedRes}
        handleLike={handleLike}
        handleDisLike={handleDisLike}
        disable={disable}
      />
      <NotLiked
        allRestaurants={allRestaurants}
        handleLike={handleLike}
        handleDisLike={handleDisLike}
        disableDislike={disableDislike}
      />
    </>
  );
}

export default RestaurantList;
