import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div className="navlink">
        <NavLink to="/">Home</NavLink>
      </div>
      <div className="navlink">
        <NavLink to="/new_resume">New Resume</NavLink>
      </div>
      <div className="navlink">
        <NavLink to="/Single_new_resume">View Resume</NavLink>
      </div>
    </div>
  );
};

export default Nav;
