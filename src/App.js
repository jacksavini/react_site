import './App.css';
import React, { } from 'react';

function Title() {
  return (
    <div className="center">
    <div className="isolate titles">
      <a href="index.html" id="title" className="title rainbow blue">
        JackSavini.com
      </a>

      <a href="index.html" id="title" className="title rainbow green">
        JackSavini.com
      </a>

      <a href="index.html" id="title" className="title rainbow red">
        JackSavini.com
      </a>
    </div>
    </div>
  );
}

function Taskbar() {
  return (
    <div style={{ width: "80%", marginLeft: "10%" }}>
      <hr style = {{width: "100%"}}></hr>
      <div className="center navBar">
        <div className="isolate links" style={{ width: "182px" }}>
          <a href="aboutMe.html" className="link rainbow red">About Me</a>
          <a href="aboutMe.html" className="link rainbow blue">About Me</a>
          <a href="aboutMe.html" className="link rainbow green">About Me</a>
        </div>

        <div className="isolate links" style={{ width: "85px" }}>
          <a href="blog.html" className="link rainbow red">Blog</a>
          <a href="blog.html" className="link rainbow blue">Blog</a>
          <a href="blog.html" className="link rainbow green">Blog</a>
        </div>

        <div className="isolate links" style={{ width: "130px" }}>
          <a href="arcade.html" className="link rainbow red">Arcade</a>
          <a href="arcade.html" className="link rainbow blue">Arcade</a>
          <a href="arcade.html" className="link rainbow green">Arcade</a>
        </div>

        <div className="isolate links" style={{ width: "125px" }}>
          <a href="career.html" className="link rainbow red">Career</a>
          <a href="career.html" className="link rainbow blue">Career</a>
          <a href="career.html" className="link rainbow green">Career</a>
        </div>
      </div>
      <hr style = {{width: "100%"}}></hr>
    </div>
  );
}

function App() {
  return (
    <div>
      <Title/>
      <Taskbar/>
    </div>
  );
}

export default App;