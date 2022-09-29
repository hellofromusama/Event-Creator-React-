import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Create from "./Create";
import Event from "./Event";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    </div>
  );
}

export default App;
