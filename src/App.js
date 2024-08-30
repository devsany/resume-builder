import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Newresume from "./component/maincomponent/Newresume";
import Home from "./component/maincomponent/Home/Home";
import Nav from "./component/smallcomponent/Navbar";

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="navbar_side">
          <Nav />
        </div>
        <div className="display">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new_resume" element={<Newresume />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
