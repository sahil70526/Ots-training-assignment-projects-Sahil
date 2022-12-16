import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import MenuBar from "./components/MenuBar";
import TraineesComponent from "./components/TraineesComponent";

function App() {
  return (
    <div className="App">
      <h1>OTS Solutions</h1>
      <MenuBar />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/services" element={<div>Services</div>} />
        <Route path="/contactus" element={<div>Contact Us</div>} />
        <Route path="/trainees" element={<TraineesComponent />} />
      </Routes>
    </div>
  );
}

export default App;
