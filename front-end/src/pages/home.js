import React from "react";

import Title from "../components/title";
import Taskbar from "../components/taskbar";
import Comments from "../components/comments";
import PostButton from "../components/post-button";

function HomePage() {

    return (
      <div>
        <Title/>
        <Taskbar/>

          <h1>Welcome &lt;3</h1>

          <p class="snippet">You have found your way to JackSavini.com, a website
            created entirely by me, Jack Savini. Feel free to explore however you
            choose.</p>

          <p class="snippet">You can learn about my background in the 'About Me' section,
            browse a selection of random thoughts on my 'Blog,' or relax and play some
            games I've made at the 'Arcade.'</p>

          <p class="snippet">My resume, and other professional resources, can be found in the 'Career'
            section.</p>

          <p class="snippet">Have fun.</p>

          <p class="snippet">- J</p>

          <script src="logic.js"></script>
          <hr></hr>
          <h1>Comment Below</h1>
          <br></br><br></br>

        <PostButton/>
        <Comments/>
      </div>
    );
}
  
export default HomePage;