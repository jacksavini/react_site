import React from "react";

import Title from "../components/title";
import Taskbar from "../components/taskbar";
import Comments from "../components/comments";
import PostButton from "../components/post-button";

function CommentsPage() {

    return (
      <div>
        <Title/>
        <Taskbar/>
        <PostButton/>
        <Comments/>
      </div>
    );
}

export default CommentsPage;