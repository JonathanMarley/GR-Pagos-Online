import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../style/prueba.css'; // Asegúrate de tener el archivo CSS para estilos adicionales

const WelcomeImage: React.FC = () => {
  return (
    <Container fluid className="welcome-container">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
        <h2 className="title">Municipalidad de Santa Lucía</h2>
          <img src="public/LogoSantaLucia.png" alt="Bienvenido" className="img-fluid welcome-img" />
          <h2 className="mt-4">¡Bienvenido a GeoRed-EnLinea!</h2>
          <p>Seleccione una opción del menú para ver detalles de impuestos y facturas.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default WelcomeImage;
