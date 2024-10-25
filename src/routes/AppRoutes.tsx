import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "../Components/LoginForm";
import Dashboard from "../pages/Dashboard";
import BienesInmuebles from '../pages/BienesInmuebles';
import DetallesBienesInmuebles from '../Components/BienesInmueblesDetalles';


import Sidebar from '../Components/Header';
import Imagen from '../Components/Imagen';
import '../style/style.css'
import '../style/prueba.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Sidebar />} />
          <Route path="/" element={<Imagen />} />
          <Route path="/bienes-inmuebles" element={<BienesInmuebles />} />
          <Route path="/detalles-impuesto" element={<DetallesBienesInmuebles />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
