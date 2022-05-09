import React from "react";

function SignIn() {
  return (
    <form>
      <h3>Please Sign In!</h3>
      <input type="username" placeholder="Enter your username"/>
      <input type="password" placeholder = "Enter your password"/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default SignIn;
