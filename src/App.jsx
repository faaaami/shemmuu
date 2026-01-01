import { useEffect, useState } from "react";
import "./App.css"
import { HashRouter,Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import One from "./Components/One";
import Two from "./Components/Two";
import Three from "./Components/Three";


export default function App() {
  

  return (
    <div>
     <Routes>
<Route path="/" element={<Home/>}></Route>
<Route path="/One" element={<One/>}></Route>
<Route path="/Two" element={<Two/>}></Route>
<Route path="/Three" element={<Three/>}></Route>






     </Routes>
 
    </div>
  );
}
