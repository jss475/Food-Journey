import React from "react";

function SignUp({handleSignUpSubmit}) {
  return (
    <form id="sign_up_form" onSubmit={handleSignUpSubmit}>
      <h3>Please Sign Up!</h3>
      <input name="username" type="username" placeholder="Enter your username"/>
      <input name="password" type="password" placeholder = "Enter your password"/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default SignUp;
