import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main>
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retour à l'accueil</Link>
    </main>
  );
}

export default NotFound;
