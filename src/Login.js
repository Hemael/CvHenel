import React, { useState } from "react";
import photoDP from "./asset/photoH.png";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (pin.trim().toUpperCase() === "SKF") {
      setError("");
      onLogin(); // met à jour l’état auth dans App
    } else {
      setError("Code PIN incorrect. Veuillez réessayer.");
    }
  };

  return (
    <div className="login-container dark">
      <form className="login-form" onSubmit={handleSubmit}>
        <img src={photoDP} alt="Profil" className="login-image" />
        <h2>Connexion</h2>
        <label htmlFor="pin">Entrez votre code PIN :</label>
        <input
          id="pin"
          type="text"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          placeholder="Code PIN"
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default Login;
