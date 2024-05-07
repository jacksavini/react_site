import "./App.css";
import Taskbar from "./components/taskbar.js";
import Title from "./components/title.js";
import Comments from "./components/comments.js";
import PostButton from "./components/post-button.js";

import React, { } from "react";


function App() {

  return (
    <div>
      <Title/>
      <Taskbar/>
      <PostButton/>
      <Comments/>
    </div>
  );
}

export default App;