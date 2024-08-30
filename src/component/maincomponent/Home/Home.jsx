import React from "react";
import Title from "./Title";
import Containt from "./Containt";
import Description from "./Description";

const Home = () => {
  return (
    <div>
      <Title />
      <div className="containt">
        <div className="all_containt_card">
          <div className="all_containt_card_box">
            <Containt
              title="Make your CV"
              description="This is the site that make your resume."
            />
            <Containt
              title="ATC Friendly"
              description="Our CV Maker make ATS Friendly CV."
            />
            <Containt
              title="Smart Editor"
              description="You may able to see the changes."
            />
            <Containt
              title="Env Setup is good"
              description="User Friendly Environment."
            />
          </div>
        </div>
      </div>
      <Description />
    </div>
  );
};

export default Home;
