import React from "react";
import ReactDOM from "react-dom";
import SingleComment from "./SingleComment";
import Usercard from "./UserCard";
import Avatar1 from "./images/avatar1.png"
import Avatar2 from "./images/avatar2.png"
import Avatar3 from "./images/avatar3.png"

const  App = () =>{
   return(
        <div className="Ui Comment">

         <Usercard>
               <p>
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.</p>
         </Usercard>
          
          <Usercard>
               <SingleComment 
               Name = "Daniel"
               Avatar = {Avatar1}
               Date = "10:56 AM"
               Comment = "What are you saying Exactly ?"
                  />
          </Usercard>

        <Usercard>
         <SingleComment 
            Name = "Agatha"
            Avatar = {Avatar2}
            Date = "11:26 AM"
            Comment = "Are you sure  ?"
            />
        </Usercard>

          <Usercard>
            <SingleComment 
            Name = "Fudani" 
            Avatar = {Avatar3}
            Date = "11:32 AM"
            Comment = "I think I agree with you"
            />
          </Usercard>
        </div>
)
}

ReactDOM.render(
<App />,
document.querySelector("#root")
)