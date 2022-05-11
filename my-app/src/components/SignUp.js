import React from "react";

function SignUp({ handleSignUpSubmit }) {
  return (
    <div className="loginbox">
      <h3>Please Sign Up!</h3>
      <form id="sign_up_form" onSubmit={handleSignUpSubmit}>
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

export default SignUp;
