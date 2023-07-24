import "./MoviesCard.css";
import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function MoviesCard({ card }) {
  const { pathname } = useLocation();

  const [isSave, setSave] = useState(false);

  return (
    <article className="card">
      <figure className="card__container">
        <img className="card__image" src={card.image} alt={card.name} />
        <figcaption className="card__header">
          <div className="card__info">
            <h2 className="card__title">{card.name}</h2>
            <p className="card__subtitle">{card.duration}</p>
          </div>
          {pathname === "/saved-movies" ? (
            <button
              type="button"
              className={`card__delete-button`}
              onClick={() => {
                setSave(!isSave);
              }}
            ></button>
          ) : (
            <button
              type="button"
              className={`card__save-button ${
                isSave && `card__save-button_active`
              }`}
              onClick={() => {
                setSave(!isSave);
              }}
            ></button>
          )}
        </figcaption>
      </figure>
    </article>
  );
}

export default MoviesCard;
