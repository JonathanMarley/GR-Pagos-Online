import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../style/login.css'; // Assuming you're using a CSS file for styling

const LoginForm: React.FC = () => {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de autenticación
    if (usuario === "admin" && password === "admin") {
      navigate("/dashboard");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div className="login-wrapper">
      {/* Left section with an image */}
      <div className="left-section">
        {/* Top image */}
        <div className="top-image">
          <img className="BancoLinea" src="./public/LogoCompletoBALinea.png" alt="LogoBancoAtlantida" />
        </div>
        <img src="./public/LogoSantaLucia.png" alt="Illustration" className="illustration" />
        
        {/* New section for additional content */}
        <div className="additional-content">
          <p>Powered by <a style={{color: "orange"}}>GeoRedes</a></p>
        </div>
      </div>

      {/* Right section for form */}
      <div className="right-section">
        <h2>¡Bienvenido ingrese sus datos!</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Ingrese su usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Ingrese su contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="buttons">
            <button type="submit" className="login-btn">Iniciar sesión</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
