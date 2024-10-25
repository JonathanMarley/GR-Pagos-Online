import React from 'react';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import DetallesBienesInmubles from '../Components/BienesInmueblesDetalles'
import '../style/style.css';
import '../style/prueba.css'
import '../style/prueba.css'; // Asegúrate de tener un archivo CSS para los estilos específicos

const BienesInmueblesPage: React.FC = () => {
  return (
    
    <div className="bienes-inmuebles-container">
         <Sidebar />
         <Header/>
         <DetallesBienesInmubles/>
      {/* Aquí agregamos la imagen central */}
      
    </div>
  );
};

export default BienesInmueblesPage;
