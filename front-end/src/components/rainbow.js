import React, { } from "react";

function Rainbow({text, refLink, type, width}) {
    return(
      <div className={`isolate ${type}s`} style={{width}}>
        <a href={refLink} className={`${type} rainbow blue`}>
          {text}
        </a>
  
        <a href={refLink} className={`${type} rainbow green`}>
          {text}
        </a>
  
        <a href={refLink} className={`${type} rainbow red`}>
          {text}
        </a>
      </div>
    );
  }

export default Rainbow;