import React from "react";

const Usercard = (props) => {
    return(
        <div className="ui card" style={{padding: '3px 0 0 0', margin:'10px'}}>
            <div className="content">
                <div className="header"> Content Name</div>
                <div className="description">
                    {props.children}
                </div>
            </div>
            <div className="ui bottom button">
                    <i className="add icon"></i>
                    Add friend
                </div>
        </div>
    )
}

export default Usercard;