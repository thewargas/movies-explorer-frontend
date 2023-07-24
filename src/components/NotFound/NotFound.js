import "./NotFound.css";
import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <main className="not-found">
      <div>
        <h2 className="not-found__title">404</h2>
        <h3 className="not-found__subtitle">Страница не найдена</h3>
      </div>
      <button className="not-dound__back-button" onClick={handleBack}>
        Назад
      </button>
    </main>
  );
}

export default NotFound;
