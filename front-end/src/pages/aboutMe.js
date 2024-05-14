import React from "react";

import Title from "../components/title";
import Taskbar from "../components/taskbar";
import RainbowPic from "../components/rainbow-pic.js"

function AboutMePage() {

    return (
      <div>
        <Title/>
        <Taskbar/>

        <h1>About Me</h1>
        <div className="square">
          </div>
            <RainbowPic />

            <p>Hi, my name's Jack. I'm a 25 year old programmer
            from San Jose California, who is currently searching for a job in software
            development. Born in 1998 in the heart of the Silicon Valley, I've always
            been in close proximity to computers. I was a senior in high school when
            I took my first programming class, and instantly I fell in love. Soon after,
            I attended Saint Mary's College of California, where I earned my bachelor's
            degree in 'Mathematics and Computer Science'. I'm currently back in
            San Jose, honing my skills as a programmer as I search for jobs. </p>

            <p>So, why make a website? There's a few reasons acually.
              I don't have any social media, so this is my way of having some kind of
              online persona. Also, I wanted
              to learn web development, and creating a website from scratch seemed like
              the perfect way to do it. JackSavini.com is meant to be a place where I can
              showcase who I am in my own way.
            </p>

      </div>
    );
}
  
export default AboutMePage;