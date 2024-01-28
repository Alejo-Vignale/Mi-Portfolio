import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Contacto from "./components/Contacto"
import MiCurriculum from "./components/MiCurriculum"
import Proyectos from "./components/Proyectos"
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Navigate replace to="/" />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/curriculum" element={<MiCurriculum />} />
      <Route path="/proyectos" element={<Proyectos />} />
    </Routes>
  );
}

export default App;
