import React from "react";
import { NavLink } from "react-router-dom";

const ExploreMore = () => {
  return (
    <div>
      <h2>
        Our online resume builder offers a quick and easy way to create your
        professional resume from 25+ design templates. Create a resume using our
        AI resume builder feature, plus take advantage of expert suggestions and
        customizable modern and professional resume templates. Free users have
        access to our easy-to-use tool and TXT file downloads.
      </h2>
      <div
        style={{
          textAlign: "center",
          fontSize: "40px",
          display: "flex",
          marginTop: "20px",
          fontWeight: "700",

          justifyContent: "center",
        }}
      >
        <div style={{ width: "50rem" }} className="pick_up_line">
          Pick one of many world-class templates and build your resume in
          minutes
        </div>
      </div>
      <div className="explore_more_view">
        <NavLink to="/view_one">
          <img src="Screenshot 2024-08-31 195824.png" alt="view_one_resume" />
        </NavLink>
      </div>
      <div className="explore_more_view">
        <NavLink to="/Single_new_resume">
          <img src="Screenshot 2024-08-31 195936.png " alt="view_one_resume" />
        </NavLink>
      </div>
      <div className="explore_more_view">
        <NavLink to="/view_two">
          <img src="view_two.png " alt="view_two_resume" />
        </NavLink>
      </div>
      <div className="explore_more_view">
        <NavLink to="/view_three">
          <img src="view_three.png " alt="view_three_resume" />
        </NavLink>
      </div>
    </div>
  );
};

export default ExploreMore;
