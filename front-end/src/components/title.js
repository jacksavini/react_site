import Rainbow from "./rainbow.js"

function Title() {
    return (
      <div className="center">
      <Rainbow
          type="title"
          refLink = "/home"
          text = "JackSavini.com"
        />
        <br></br>
      </div>
    );
  }

export default Title;