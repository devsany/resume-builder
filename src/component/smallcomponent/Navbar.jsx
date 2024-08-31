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
      <div className="navlink">
        <NavLink to="/explore_more_resume_builder">🚀 Explore More</NavLink>
      </div>
      <div className="navlink">
        <NavLink to="/email_application_field">🎒 Application</NavLink>
      </div>
      <div className="navlink">
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <div className="navlink">
        <NavLink to="/help">Help</NavLink>
      </div>
    </div>
  );
};

export default Nav;
