import "./styles/main.css";
import "./styles/less.less";
import React from "react";
import { render } from "react-dom";

const App = () => {
  return (
    <div className="box">
      <h2>Yello Im React</h2>
    </div>
  );
};

render(<App />, document.getElementById("app"));
