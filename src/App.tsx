// import "./App.css";
import { Home } from "./pages/Home";
import { Decimo } from "./pages/Decimo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import React, { useEffect } from "react";

function App() {
  // useEffect(() => {
  //   // Create a new script element
  //   const script = document.createElement("script");

  //   {
  //     /* <!-- Main JS File --> */
  //   }
  //   script.src = "src/assets/js/main2.js";

  //   // Optional: Set the script to load asynchronously
  //   script.async = true;

  //   // Append the script to the document's head or body
  //   document.body.appendChild(script);

  //   // Cleanup: Remove the script when the component is unmounted
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []); // The empty array ensures this effect only runs once when the component mounts

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/materiales" element={<Decimo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
