import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import '../style/prueba.css'; // Asegúrate de que el archivo CSS esté bien referenciado

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <h1 className="header-title">GeoRedes</h1>
      <div className="user-profile" onClick={toggleDropdown}>
        <FontAwesomeIcon icon={faUser} className="user-icon" />
        <span className="user-name">Jonathan Marley</span>

        {/* Menú desplegable */}
        {isOpen && (
          <div className="dropdown-menu">
            <ul>
              <li><a href="#perfil">Perfil</a></li>
              <li><a href="#soporte">Soporte Técnico</a></li>
              <li><a href="#logout">Cerrar Sesión</a></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
