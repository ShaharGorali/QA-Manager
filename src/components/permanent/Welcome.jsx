import React from "react";
import { NavLink } from 'react-router-dom';

const Welcome = () => {
  return (
    <>
      <div className="welcomeSpace">
        <h1>QA Manager</h1>
        <form action="login" className="loginSpace">
          <label htmlFor="userName">User name</label>
          <input required type="text" name="userName" id="userName" />
                <NavLink to={'/main'}><button>Continue</button></NavLink>
        </form>
        <p id="comm">Fast and Easy</p>
      </div>
    </>
  );
};

export default Welcome;
