import React from "react";
import { useNavigate } from "react-router-dom";

function Auth() {
  const navigate = useNavigate();
  return (
    <div>
      <fieldset>
        <legend>Login</legend>
        <h1>LOGIN</h1>
        <form action="">
          <label htmlFor="username">Username</label>
          <br />
          <input type="text" /> <br />
          <label htmlFor="password">Password</label>
          <br />
          <input type="password" />
          <br /> <br />
          <button>Login</button>
        </form>
      </fieldset>
    </div>
  );
}

export default Auth;
