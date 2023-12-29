import { BrowserRouter, Route, Routes } from "react-router-dom";
import ThemeContextProvider from "./Context/ThemeContextProvider";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import SoftwareEngineering from "./Components/SoftwareEngineering";
import HardwareEngineering from "./Components/HardwareEngineering";

function App() {
  return (

    <BrowserRouter>
       <div>
        <ThemeContextProvider>
          <Navbar />
          <Routes>
            <Route exact path="/" element={ <Home /> } />
            <Route path="/SoftwareEngineering" element={ <SoftwareEngineering />} />
            <Route path="/HardwareEngineering" element={ <HardwareEngineering /> } />
          </Routes>
        </ThemeContextProvider>
      </div>
    </BrowserRouter>
     
  );
}

export default App;
