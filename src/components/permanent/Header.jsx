import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="headerSpace">
     <NavLink id="logo" to={'/main'}> <h2>My QA Manager</h2></NavLink>
      <div>
        <div><p></p></div>
        <NavLink id="addNew" to={"/addnewtest"}>
          <p>Add new test+</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
