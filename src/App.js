import "./App.css";
import React, { } from "react";
import Rainbow from "./components/rainbow.js";
import Taskbar from "./components/taskbar.js";
import Title from "./components/title.js";

function App() {
  return (
    <div>
      <Title/>
      <Taskbar/>
    </div>
  );
}

export default App;