import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Description = () => {
  const navigator = useNavigate();
  return (
    <div>
      <h2>The Best Online Resume Builder</h2>
      <div className="easy">
        Easily create the perfect resume for any job using our best-in-class
        resume builder platform.
      </div>

      <button className="button_description">
        {" "}
        <NavLink to="/new_resume">Create My Resume Now</NavLink>
      </button>
    </div>
  );
};

export default Description;
