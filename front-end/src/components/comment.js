import React from "react";


function SingleComment({index, name, text}) {
    return(
        <div key={index} style={{  border: "1px solid white" }}>
            <h1>{name}</h1>
            <p>{text}</p>
        </div>
    );

}

export default SingleComment;