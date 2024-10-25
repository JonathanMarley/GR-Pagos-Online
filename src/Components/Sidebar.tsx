import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBuilding, faIndustry, faTrash, faFileAlt, faSearch, faLeaf } from '@fortawesome/free-solid-svg-icons';
import '../style/prueba.css'; // Estilos adicionales

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar p-3">
      <h3 className="mb-3">Pagos</h3>
      <ul className="list-unstyled">
        <li className="mb-2">
          <Link to="/bienes-inmuebles" className="btn btn-light d-flex align-items-center w-100 p-2 shadow-sm">
            <FontAwesomeIcon icon={faHome} className="me-2 text-warning" />
            BI-Bienes Inmuebles
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/impuesto-personal" className="btn btn-light d-flex align-items-center w-100 p-2 shadow-sm">
            <FontAwesomeIcon icon={faUser} className="me-2 text-warning" />
            IP-Impuesto Personal (Vecinal)
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/servicios-publicos" className="btn btn-light d-flex align-items-center w-100 p-2 shadow-sm">
            <FontAwesomeIcon icon={faBuilding} className="me-2 text-warning" />
            SP-Servicios Públicos
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/industria-comercio" className="btn btn-light d-flex align-items-center w-100 p-2 shadow-sm">
            <FontAwesomeIcon icon={faIndustry} className="me-2 text-warning" />
            ICS-Industria, Comercio y Servicios
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/otras-tasas" className="btn btn-light d-flex align-items-center w-100 p-2 shadow-sm">
            <FontAwesomeIcon icon={faTrash} className="me-2 text-warning" />
            Otras Tasas Municipales
          </Link>
        </li>
      </ul>

      <h3 className="mt-2 mb-2">Presentación declaraciones</h3>
      <ul className="list-unstyled">
        <li className="mb-2">
          <Link to="/volumen-ventas" className="btn btn-light d-flex align-items-center w-100 p-2 shadow-sm">
            <FontAwesomeIcon icon={faFileAlt} className="me-2 text-warning" />
            Declaración Volumen de Ventas
          </Link>
        </li>
      </ul>

      <h3 className="mt-4 mb-3">Servicios Municipales</h3>
      <ul className="list-unstyled">
        <li className="mb-2">
          <Link to="/solicitud-inspeccion" className="btn btn-light d-flex align-items-center w-100 p-2 shadow-sm">
            <FontAwesomeIcon icon={faSearch} className="me-2 text-warning" />
            Solicitud de Inspección
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/ambientales" className="btn btn-light d-flex align-items-center w-100 p-2 shadow-sm">
            <FontAwesomeIcon icon={faLeaf} className="me-2 text-warning" />
            Ambientales
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
