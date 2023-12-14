import React from "react";

const SingleComment = (props) =>{
    return (

        <div className=" ui comments">
            <div className="comment" style={{padding:'10px 0', margin:'0 20px'}}>
                <a href="/">
                <img src={props.Avatar} style={{width: '20%', borderRadius: '50%'}} alt="Avatar" />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {props.Name}
                    </a>
                    <div className="metadata">
                        <span className="date">
                        Today at {props.Date}
                        </span>
                    </div>
                    <div className="text">
                    {props.Comment}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleComment;