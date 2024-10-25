import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import '../style/style.css';
import '../style/prueba.css'

const Dashboard: React.FC = () => {
  return (
    <div className="layout">
      <Header />
      <div className="layout-content">
        <Sidebar />
        <main className="main-content">
          {/* Aquí insertas el contenido principal con la imagen */}
          <div className="center-content">
            <img 
              src="public/LogoSantaLucia.png" 
              alt="Municipalidad de Santa Lucía" 
              className="main-image"
            />
          </div>
        </main>
      </div>
    </div>
  
  );
};

export default Dashboard;
