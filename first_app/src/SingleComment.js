import React from "react";
import Avatar1 from "./images/avatar1.png"

const SingleComment = () =>{
    return (
        <div className="Comments">
        <div className="Comment_Top">
            <a href="/">
                <img src={Avatar1} style={{width: '10%'}} alt="Avatar_1" />
            </a>
            <h3>Daniel</h3>
        </div>
        <p className="Commented_Comment">Exactly what i said</p>
        <h4>Today at 4:56 Am</h4>
</div>
    )
}

export default SingleComment