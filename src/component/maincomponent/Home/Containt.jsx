import React from "react";

const Containt = (props) => {
  return (
    <div>
      <div className="containt_cards">
        <div className="containt_title">{props.title}</div>
        <div className="containt_description">{props.description}</div>
      </div>
    </div>
      
  );
};

export default Containt;
