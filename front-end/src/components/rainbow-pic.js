import React, { } from "react";

function RainbowPic() {
    return(
        
        <div id="pics" className={"isolate pics"} style={{height: "150px", width: "180px", float:"left"}}>
            <div style={{backgroundImage: "url(../../assets/selfie.jpg)", width: "150px", height: "150px", marginTop: "0px"}} className={"rainbow pic red"}></div>
            <div style={{backgroundImage: "url(../../assets/selfie.jpg)", width: "150px", height: "150px", marginTop: "0px"}} className={"rainbow pic blue"}></div>
            <div style={{backgroundImage: "url(../../assets/selfie.jpg)", width: "150px", height: "150px", marginTop: "0px"}} className={"rainbow pic green"}></div>
        </div>
        
    );
  }

export default RainbowPic;