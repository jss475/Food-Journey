import logo from "../logo.svg";
import React, { useEffect, useState, useContext } from "react";
import "../App.css";
import About from "./About";
import Nav from "./Nav";
import RestaurantList from "./RestaurantList";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import Home from "./Home";
import { UserLoggedInContext } from "../context/UserLoggedIn";
import {AllRestaurantsContext} from "../context/AllRestaurants"

function App() {
  //create useState for the list of users signed up already
  const [allUsers, setAllUsers] = useState([]);
  //set the history variable to use the useHistory hook
  const history = useHistory();
  //set the logged in state to say user has logged in
  const [loggedIn, setLoggedIn] = useState(false);

  //set the current user
  const [currentUser, setCurrentUser] = useContext(UserLoggedInContext);
  //set all the restaurants
  const [allRestaurants,setAllRestaurants] = useContext(AllRestaurantsContext)
  //fetch the users that have signed up already
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((resp) => resp.json())
      .then((data) => setAllUsers(data));
  }, []);


   //make a useEffect to pull all the restaurants
   useEffect(() => {
    fetch("http://localhost:3000/restaurants")
      .then((resp) => resp.json())
      .then((data) => setAllRestaurants(data));
  }, []);

  ///////////////////////// SIGN IN ////////////////////////////////
  function handleSignInSubmit(e) {
    e.preventDefault();
    //if statement to make sure you fill out the form
    if (e.target.password.value === "" && e.target.username.value === "") {
      alert("Please Fill Out Your Username and Password!");
    } else if (e.target.password.value === "") {
      alert("Please Fill Out Your Password");
    } else if (e.target.username.value === "") {
      alert("Please Fill Out Your Username");
    } else {
      //filter out the users that are signed in
      let filteredUsers = allUsers.filter((user) => {
        if (
          user.username === e.target.username.value &&
          user.password === e.target.password.value
        ) {
          return true;
        } else {
          return false;
        }
      });

      //if of bang of the .length so that I am looking for true when it's empty
      if (!filteredUsers.length) {
        alert("Your Username and Password Are Not In The System");
      } else {
        //set the state of the users as logged in
        setLoggedIn(true);
        //save current user
        setCurrentUser(e.target.username.value);
        //if user is in the system, redirect the website to restaurants
        history.push("/restaurants");
      }
    }
    //do the history to send to home/restaurant list after signing in

    //reset the form after the submit
    document.querySelector("#sign_in_form").reset();
  }
  //////////////////////////// SIGN UP SUBMIT /////////////////////////
  function handleSignUpSubmit(e) {
    e.preventDefault();
    //if statement to make sure you fill out the form
    if (e.target.password.value === "" && e.target.username.value === "") {
      alert("Please Fill Out Your Username and Password!");
    } else if (e.target.password.value === "") {
      alert("Please Fill Out Your Password");
    } else if (e.target.username.value === "") {
      alert("Please Fill Out Your Username");
    } else {
      //filter out the users that have the same username
      let filteredUsers = allUsers.filter((user) => {
        if (user.username === e.target.username.value) {
          return true;
        } else {
          return false;
        }
      });

      //if of bang of the .length so that I am looking for true when it's empty
      if (filteredUsers.length) {
        alert("Your Username Is In The System. Please Choose Another One!");
      } else {
        alert("Thanks for Signing Up!");
        //if user is in the system, redirect the website to the list of restaurants
        history.push("/restaurants");
        //set the state of logged in to true
        setLoggedIn(true);

        //save current user
        setCurrentUser(e.target.username.value);

        //post the new user into the database
        let configObj = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: e.target.username.value,
            password: e.target.password.value,
            liked: [],
          }),
        };

        fetch("http://localhost:3000/users", configObj)
          .then((res) => res.json())
          .then((data) => setAllUsers([...allUsers, data]));
      }
    }

    //reset the form after the submit
    document.querySelector("#sign_up_form").reset();
  }

  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/signin">
          <SignIn handleSignInSubmit={handleSignInSubmit} />
        </Route>
        <Route path="/restaurants">
          <RestaurantList allUsers={allUsers} allRestaurants={allRestaurants} loggedIn={loggedIn}/>
        </Route>
        <Route path="/signup">
          <SignUp handleSignUpSubmit={handleSignUpSubmit} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
