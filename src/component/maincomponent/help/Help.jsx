import React from "react";
import { NavLink } from "react-router-dom";

const Help = () => {
  return (
    <div>
      <h2>Help to help other 😊</h2>
      <div>
        <div className="help_orderd_list">
          <ol>
            <li>Please Fill the all form field correctly.</li>
            <li>
              In the form field of Description of project ther should be about
              200 words must be there. So, it make Resume outlet good.
            </li>
            <li>
              First Fill the{" "}
              <span
                style={{
                  backgroundColor: "#eee",
                  paddingLeft: "5px",
                  paddingRight: "5px",
                  paddingBottom: "2px",
                  margin: "2px",
                  borderRadius: "5px",
                }}
              >
                <NavLink to="/new_resume">📃 New Resume</NavLink>
              </span>
              , then click the
              <span
                style={{
                  backgroundColor: "#eee",
                  paddingLeft: "5px",
                  paddingRight: "5px",
                  paddingBottom: "2px",
                  margin: "2px",
                  borderRadius: "5px",
                }}
              >
                <NavLink to="/Single_new_resume">🔎 View Resume</NavLink>
              </span>
            </li>
            <li>
              After Filling the All Form Field go to{" "}
              <span
                style={{
                  backgroundColor: "#eee",
                  paddingLeft: "5px",
                  paddingRight: "5px",
                  paddingBottom: "2px",
                  margin: "2px",
                  borderRadius: "5px",
                }}
              >
                <NavLink to="/Single_new_resume">🕵🏻‍♀️ View Resume</NavLink>
              </span>
            </li>
            <li>
              In{" "}
              <span
                style={{
                  backgroundColor: "#eee",
                  paddingLeft: "5px",
                  paddingRight: "5px",
                  paddingBottom: "2px",
                  margin: "2px",
                  borderRadius: "5px",
                }}
              >
                <NavLink to="/Single_new_resume">📄 View Resume</NavLink>
              </span>
              , you can
              <span
                style={{
                  backgroundColor: "#eee",
                  paddingLeft: "5px",
                  paddingRight: "5px",
                  paddingBottom: "2px",
                  margin: "2px",
                  borderRadius: "5px",
                }}
              >
                🖨 Print
              </span>{" "}
              your resume
            </li>
            <li>
              {" "}
              You may Contact to me{" "}
              <span
                style={{
                  backgroundColor: "#eee",
                  paddingLeft: "5px",
                  paddingRight: "5px",
                  paddingBottom: "2px",
                  margin: "2px",
                  borderRadius: "5px",
                }}
              >
                <NavLink to="/contact"> 🤵🏻 Contact to Developer</NavLink>
              </span>
              , Feal Free to fill the contact form. I will look forword to reply
              to your message 🙂.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Help;
