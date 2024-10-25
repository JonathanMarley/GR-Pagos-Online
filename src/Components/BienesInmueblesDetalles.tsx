import React, { useState } from 'react';
import '../style/prueba.css'; // Archivo de estilo para los componentes

const DetallesImpuesto: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  // Función para abrir el modal
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="detalles-impuesto-container">
      <h2 className="title">Municipalidad de Santa Lucía</h2>
      <img className="logoSantaLucia" src="/public/LogoSantaLucia.png" alt="Logo Municipalidad" />
      
      <table className="details-table">
        <thead>
          <tr>
            <th>Número Contribuyente</th>
            <th>Número Identidad</th>
            <th>Residencia</th>
            <th>Correo Electrónico</th>
            <th style={{ cursor: 'pointer' }}>Facturación</th>
          </tr>
        </thead>
        <tbody>
          {/* Añade más filas si es necesario */}
          <tr>
            <td>0802151255585</td>
            <td>0801200103973</td>
            <td>Villeda Morales</td>
            <td>jonathanmarleyt2536@gmail.com</td>
            <td style={{ cursor: 'pointer', color: 'orange' }} onClick={handleOpenModal}>Facturación</td> {/* Hace clic aquí para abrir el modal */}
          </tr>
           {/* Añade más filas si es necesario */}
           <tr>
            <td>0802151255585</td>
            <td>0801200103973</td>
            <td>Villeda Morales</td>
            <td>jonathanmarleyt2536@gmail.com</td>
            <td style={{ cursor: 'pointer', color: 'orange' }} onClick={handleOpenModal}>Facturación</td> {/* Hace clic aquí para abrir el modal */}
          </tr>
           {/* Añade más filas si es necesario */}
           <tr>
            <td>0802151255585</td>
            <td>0801200103973</td>
            <td>Villeda Morales</td>
            <td>jonathanmarleyt2536@gmail.com</td>
            <td style={{ cursor: 'pointer', color: 'orange' }} onClick={handleOpenModal}>Facturación</td> {/* Hace clic aquí para abrir el modal */}
          </tr>
           {/* Añade más filas si es necesario */}
           <tr>
            <td>0802151255585</td>
            <td>0801200103973</td>
            <td>Villeda Morales</td>
            <td>jonathanmarleyt2536@gmail.com</td>
            <td style={{ cursor: 'pointer', color: 'orange' }} onClick={handleOpenModal}>Facturación</td> {/* Hace clic aquí para abrir el modal */}
          </tr>
           {/* Añade más filas si es necesario */}
           <tr>
            <td>0802151255585</td>
            <td>0801200103973</td>
            <td>Villeda Morales</td>
            <td>jonathanmarleyt2536@gmail.com</td>
            <td style={{ cursor: 'pointer', color: 'orange'}} onClick={handleOpenModal}>Facturación</td> {/* Hace clic aquí para abrir el modal */}
          </tr>
           {/* Añade más filas si es necesario */}
           <tr>
            <td>0802151255585</td>
            <td>0801200103973</td>
            <td>Villeda Morales</td>
            <td>jonathanmarleyt2536@gmail.com</td>
            <td style={{ cursor: 'pointer', color: 'orange' }} onClick={handleOpenModal}>Facturación</td> {/* Hace clic aquí para abrir el modal */}
          </tr>
           {/* Añade más filas si es necesario */}
           <tr>
            <td>0802151255585</td>
            <td>0801200103973</td>
            <td>Villeda Morales</td>
            <td>jonathanmarleyt2536@gmail.com</td>
            <td style={{ cursor: 'pointer', color: 'orange' }} onClick={handleOpenModal}>Facturación</td> {/* Hace clic aquí para abrir el modal */}
          </tr>
           {/* Añade más filas si es necesario */}
           <tr>
            <td>0802151255585</td>
            <td>0801200103973</td>
            <td>Villeda Morales</td>
            <td>jonathanmarleyt2536@gmail.com</td>
            <td style={{ cursor: 'pointer', color: 'orange' }} onClick={handleOpenModal}>Facturación</td> {/* Hace clic aquí para abrir el modal */}
          </tr>
           {/* Añade más filas si es necesario */}
           <tr>
            <td>0802151255585</td>
            <td>0801200103973</td>
            <td>Villeda Morales</td>
            <td>jonathanmarleyt2536@gmail.com</td>
            <td style={{ cursor: 'pointer', color: 'orange' }} onClick={handleOpenModal}>Facturación</td> {/* Hace clic aquí para abrir el modal */}
          </tr>
           {/* Añade más filas si es necesario */}
           <tr>
            <td>0802151255585</td>
            <td>0801200103973</td>
            <td>Villeda Morales</td>
            <td>jonathanmarleyt2536@gmail.com</td>
            <td style={{ cursor: 'pointer', color: 'orange'}} onClick={handleOpenModal}>Facturación</td> {/* Hace clic aquí para abrir el modal */}
          </tr>
        </tbody>
      </table>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Detalles de Facturación</h3>
            <img className="logoSantaLucia" src="/public/LogoSantaLucia.png" alt="Logo Municipalidad" />
            <p>Mensaje de confirmación sobre la facturación.</p>
            <button onClick={handleCloseModal} className="button">Aceptar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetallesImpuesto;
