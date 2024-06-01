import Rainbow from "./rainbow.js";
import React, {useState, useEffect} from "react";

function Taskbar() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const wideBar = () => {
        return (
            <div>
            <hr></hr>
            <div className="center navBar">
                <Rainbow
                type="link"
                refLink = "/aboutMe"
                text = "About Me"
                width = "195px"
                />
    
                <Rainbow
                type="link"
                refLink = "/blog"
                text = "Blog"
                width = "85px"
                />
    
                <Rainbow
                type="link"
                refLink = "/projects"
                text = "Projects"
                width = "160px"
                />
    
                <Rainbow
                type="link"
                refLink = "/career"
                text = "Career"
                width = "125px"
                />
            </div>
            <hr style = {{width: "100%"}}></hr>
            </div>
        );
    }

    const shortBar = () => {
        return (
            <div>
            <hr></hr>
            <div className="center navBar">
                <Rainbow
                type="link"
                refLink = "/aboutMe"
                text = "About Me"
                width = "195px"
                />
    
                <Rainbow
                type="link"
                refLink = "/blog"
                text = "Blog"
                width = "85px"
                />
            </div>
            <br></br>
            <div className="center navBar">
                <Rainbow
                type="link"
                refLink = "/projects"
                text = "Projects"
                width = "160px"
                />
    
                <Rainbow
                type="link"
                refLink = "/career"
                text = "Career"
                width = "125px"
                />
            </div>
            <hr style = {{width: "100%"}}></hr>
            </div>
        );
    }

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);

        return() => {
            window.removeEventListener("resize", handleResize);
        }
    }, [])

    
    if(windowWidth > 1000){
        return(wideBar())
    }
    else{
        return(shortBar())
    }
}

export default Taskbar;