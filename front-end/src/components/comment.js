import React from "react";


function SingleComment({name, text}) {
    return(
        <div>
        <div style={{  border: "1px solid white" }} className="comment">
            <h2 style={{marginLeft: "20px"}}>{name}</h2>
            <p style={{marginLeft: "20px", fontSize: "20px"}}>{text}</p>
        </div>
        <br></br>
        </div>
    );

}

export default SingleComment;