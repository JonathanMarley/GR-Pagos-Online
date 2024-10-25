import React from 'react';
import '../style/menu.css'

const MainPage: React.FC = () => {
  return (
    <div>
      <div className="municipality-header">
        <img 
          src="public/LogoSantaLucia.png" 
          alt="Municipalidad de Santa Lucía" 
          className="municipality-logo" 
        />
        <h2>Municipalidad de Santa Lucía, Francisco Morazán</h2>
      </div>
      <div className="search-section">
        <input 
          type="text" 
          placeholder="Busca tu Bienes Inmuebles o contribuyente..." 
          className="search-input"
        />
      </div>
      <div className="table-section">
        <table>
          <thead>
            <tr>
              <th>Numero Contribuyente</th>
              <th>Numero Identidad</th>
              <th>Residencia</th>
              <th>Correo Electrónico</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0802151255585</td>
              <td>0801200103973</td>
              <td>Villeda Morales</td>
              <td>jonathanmarley2536@gmail.com</td>
            </tr>
            <tr>
              <td>0802151255585</td>
              <td>0801200103973</td>
              <td>Villeda Morales</td>
              <td>jonathanmarley2536@gmail.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainPage;
