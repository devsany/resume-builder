import React from "react";

const Input = () => {
  return (
    <div className="all_input_field">
      <div className="inputField">
        <label htmlFor="name">Enter your name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your Name"
          name="name"
        />
        <span className="error">error</span>
      </div>
      <div className="inputField">
        <label htmlFor="name">Enter your name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your Name"
          name="name"
        />
      </div>
    </div>
  );
};

export default Input;
