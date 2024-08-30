import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Newresume from "./component/maincomponent/new_resume/Newresume";
import Home from "./component/maincomponent/Home/Home";
import Nav from "./component/smallcomponent/Navbar";
import { useState } from "react";
import ViewSingleResume from "./component/maincomponent/ViewSingleResume/ViewSingleResume";

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
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
