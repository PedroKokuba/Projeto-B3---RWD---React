import React from "react";
import Home from "./componentes/Home";
import PaginaPrincipal from "./componentes/PaginaPrincipal";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/PaginaPrincipal" element={<PaginaPrincipal/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;