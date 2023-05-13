import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./icons.js";
import Desktop from "./screens/Desktop";
import Mobile from "./screens/Mobile";
import Untitled1 from "./screens/Untitled1";
import "./style.css";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Desktop} />
      <Route path="/Desktop/" exact component={Desktop} />
      <Route path="/Mobile/" exact component={Mobile} />
      <Route path="/Untitled1/" exact component={Untitled1} />
    </Router>
  );
}

export default App;
