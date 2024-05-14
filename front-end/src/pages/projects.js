import React from "react";

import Title from "../components/title";
import Taskbar from "../components/taskbar";
import Rainbow from "../components/rainbow";

function ProjectsPage() {
    return (
      <div>
        <Title/>
        <Taskbar/>
        <Rainbow 
            text="Comments Section"
            refLink="comments"
            type="link"
        />
      </div>
    );
}

export default ProjectsPage;