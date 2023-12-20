import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";


function App() {
  return (
   <BrowserRouter>
     <div className="App"> 
        <Navbar />
        <Routes>
          <Route exact path="/"  element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />}/>
        </Routes>
    </div>
   </BrowserRouter>
  );
}

export default App;
