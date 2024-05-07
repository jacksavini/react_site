import Rainbow from "./rainbow.js";

function Taskbar() {
    return (
        <div>
        <hr></hr>
        <div className="center navBar">
            <Rainbow
            type="link"
            refLink = "aboutMe.html"
            text = "About Me"
            width = "182px"
            />

            <Rainbow
            type="link"
            refLink = "blog.html"
            text = "Blog"
            width = "85px"
            />

            <Rainbow
            type="link"
            refLink = "arcade.html"
            text = "Arcade"
            width = "130px"
            />

            <Rainbow
            type="link"
            refLink = "career.html"
            text = "Career"
            width = "125px"
            />
        </div>
        <hr style = {{width: "100%"}}></hr>
        </div>
    );
}

export default Taskbar;