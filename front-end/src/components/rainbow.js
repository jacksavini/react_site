import React, { } from "react";
import { Link } from "react-router-dom";

function Rainbow({text, refLink, type, width}) {
    return(
      <div className={`isolate ${type}s`} style={{width}}>
        <Link to={refLink} className={`${type} rainbow blue`}>
          {text}
        </Link>
  
        <Link to={refLink} className={`${type} rainbow green`}>
          {text}
        </Link>
  
        <Link to={refLink} className={`${type} rainbow red`}>
          {text}
        </Link>
      </div>
    );
  }

export default Rainbow;