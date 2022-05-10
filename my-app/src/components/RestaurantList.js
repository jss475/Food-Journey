import React, { useState, useEffect, useContext, useTransition } from "react";
import NotLiked from "./NotLiked";
import Liked from "./Liked";
import { UserLoggedInContext } from "../context/UserLoggedIn";
import { AllRestaurantsContext } from "../context/AllRestaurants";


//we initialize an array of what is liked
let likedArray = [];

function RestaurantList({ allUsers, loggedIn }) {
  const [currentUser] = useContext(UserLoggedInContext); //username is set to currentUser
  const [allRestaurants, setAllRestaurants] = useContext(AllRestaurantsContext)
  //then we can do a filter where we return id
  const userID = allUsers.filter((user) => {
    return user.username === currentUser;
  });

  // console.log(userID);
  
  const [likedRes, setLikedRes] = useState([]);
  const [disable, setDisable] = useState(false); //disable Like button after a click
  const [disableDislike, setDisbaleDislike] = useState(true);

 

 
  
  useEffect(() => {
    if (userID.length && allRestaurants.length) {
      let likedListOfUser = userID[0].liked;
      //we do a filter on allrestaurants to filter what has been liked already
      let alreadyLiked = allRestaurants.filter((res) => {
        return likedListOfUser.includes(+res.id);
      });
      setLikedRes(alreadyLiked); //we're setting the number 1 and 2. Not the restaurant data
      likedArray=likedListOfUser

    }
  }, [currentUser]);


  console.log(likedRes)
  // when like button gets clicked, clicked data gets sent to this function
  function handleLike(data) {
    // filter all restaurant and return all except for the one that we liked
    const filteredLike = allRestaurants.filter((res) => {
      return res.id !== data.id;
    });
    //add the restaurant id to the liked array
    likedArray.push(data.id);

    fetch(`http://localhost:3000/users/${userID[0].id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ liked: likedArray }), //add the ID of the restaurant into liked
    });

    // push the data that we liked to liked restauarant list
    setLikedRes([...likedRes, data]);
    // we set all restaurant to show all excepte for the one that we like
    setAllRestaurants((allRestaurants) => filteredLike);
    //disable the like button
    //document.querySelector("#like_button").disabled = true;
    setDisable(true);
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

    //we're going to take liked array and remove the one taht has been disliked
    //need to find index of the dislike one
    let dislikedIDIndex = likedArray.indexOf(data.id);
    likedArray.splice(+dislikedIDIndex, 1);

    fetch(`http://localhost:3000/users/${userID[0].id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ liked: likedArray }),
    });
  }



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
