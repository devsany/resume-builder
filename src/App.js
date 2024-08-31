import "./App.css";
import { Route, Routes } from "react-router-dom";
import Newresume from "./component/maincomponent/new_resume/Newresume";
import Home from "./component/maincomponent/Home/Home";
import Nav from "./component/smallcomponent/Navbar";
import { useState } from "react";
import ViewSingleResume from "./component/maincomponent/ViewSingleResume/ViewSingleResume";
import Contact from "./component/maincomponent/Contact/Contact";
import Help from "./component/maincomponent/help/Help";
import ExploreMore from "./component/maincomponent/exploremore/ExploreMore";
import Email from "./component/maincomponent/email/Email";
import ViewOne from "./component/maincomponent/exploremore/View1/ViewOne";
import ViewTwo from "./component/maincomponent/exploremore/view2/ViewTwo";
import ViewThree from "./component/maincomponent/exploremore/view3/ViewThree";

function App() {
  const [toggle, setToggle] = useState(true);
  const handletoggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="App">
      <button className="hideShowButton" onClick={handletoggle}>
        {toggle ? "Hide Sidebar" : "Show Sidebar"}
      </button>
      <div className="main">
        {toggle && (
          <div className="navbar_side">
            {" "}
            <Nav />
          </div>
        )}
        <div className="display">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new_resume" element={<Newresume />} />
            <Route path="/Single_new_resume" element={<ViewSingleResume />} />
            <Route path="/email_application_field" element={<Email />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="/help" element={<Help />} />
            <Route
              path="/explore_more_resume_builder"
              element={<ExploreMore />}
            />
            <Route path="view_one" element={<ViewOne />} />
            <Route path="view_two" element={<ViewTwo />} />
            <Route path="view_three" element={<ViewThree />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
