import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Formulario from './formulario';
import Crear from './crear';
import Eliminar from './eliminar';
import Modificar from './modificar';
import Buscar from './buscar';
// import OtroComponente from './OtroComponente'; // Ajusta la ruta según tu estructura de archivos
import Navbar from './navbar'; // Ajusta la ruta según tu estructura de archivos
import { Navigate, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <hr />

      <Routes>
        <Route path="/" element={<Formulario/>} />
        <Route path="/crear" element={<Crear />} />
         <Route path="/eliminar" element={<Eliminar />} />
        <Route path="/modificar" element={<Modificar />} /> 
         {<Route path="/buscar" element={<Buscar/>} />
        }

        
       
      </Routes>
    </>
  );
}

export default App;