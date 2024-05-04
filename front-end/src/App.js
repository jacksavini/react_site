import "./App.css";
import Taskbar from "./components/taskbar.js";
import Title from "./components/title.js";
import Comments from "./components/comments.js";

import React, { } from "react";


function App() {
  return (
    <div>
      <Title/>
      <Taskbar/>
      <Comments/>
    </div>
  );
}

export default App;