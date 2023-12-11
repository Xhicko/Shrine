import React from "react";
import ReactDOM from "react-dom";
import SingleComment from "./SingleComment";

const  App = () =>{
   return(
        <div className="Ui Comment">
           <SingleComment />
        </div>
)
}

ReactDOM.render(
<App />,
document.querySelector("#root")
)