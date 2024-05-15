import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import About from "./Pages/About";
import ApplicationDev from "./Pages/ApplicationDev";
import RemoteSensing from "./Pages/RemoteSensing";
import CityModeling from "./Pages/CityModeling";
import Photogrammetry from "./Pages/Photogrammetry";
import DataAnalysis from "./Pages/DataAnalysis";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gis-application-dev" element={<ApplicationDev />} />
        <Route path="/remote-sensing" element={<RemoteSensing />} />
        <Route path="/3d-city-modeling" element={<CityModeling />} />
        <Route path="/gis-photogrammetry" element={<Photogrammetry />} />
        <Route path="/gis-data-analysis" element={<DataAnalysis />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
