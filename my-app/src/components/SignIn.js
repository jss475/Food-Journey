import React from "react";

function SignIn({ handleSignInSubmit }) {
  return (
    <div className="loginbox">
      <h3>Please Sign In!</h3>
      <form id="sign_in_form" onSubmit={handleSignInSubmit}>
        <p>Username</p>
        <input
          name="username"
          type="username"
          placeholder="Enter your username"
        />
        <p>Password</p>
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SignIn;
