import React from "react";
import {  Link } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContextProvider";
import './index.css'


class Navbar extends React.Component{
    static contextType = ThemeContext;

    render(){
       return(
        <ThemeContext.Consumer>
        {(context)=>{
                 const {isDark, darkTheme, lightTheme, changeTheme} = context
                 const theme = isDark ? darkTheme: lightTheme;
         
                 return(
                     <div className='Nav_Wrapper' style={{background:theme.backgroundColor, color:theme.textColor}}>
                         <nav>
                             <li> <Link to="/">Home</Link> </li>
                             <li> <Link to="/SoftwareEngineering">Software Engineering</Link> </li>
                             <li> <Link to="/HardwareEngineering">Hardware Engineering</Link> </li>
                         </nav>
         
                         <button onClick={changeTheme} style={{background:theme.buttonBg, color:theme.ButtonCl}}>Switch Theme </button>
                     </div>
                 )
        }}
        </ThemeContext.Consumer>
       )
       
    }
}


export default Navbar;