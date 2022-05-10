import React from "react";

function SignIn({handleSignInSubmit}) {
  return (
    <form id="sign_in_form" onSubmit = {handleSignInSubmit}>
      <h3>Please Sign In!</h3>
      <input name="username" type="username" placeholder="Enter your username"/>
      <input name="password" type="password" placeholder = "Enter your password"/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default SignIn;
