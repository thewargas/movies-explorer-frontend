import "./MoviesCard.css";
import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function MoviesCard({ card }) {
  const { pathname } = useLocation();

  const [isSave, setSave] = useState(false);

  const handleTimeTransformation = (duration) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${
      (hours > 0 ? `${hours}ч ` : "") + (minutes > 0 ? `${minutes}м` : "")
    }`;
  };

  return (
    <article className="card">
      <figure className="card__container">
        <img
          className="card__image"
          src={`https://api.nomoreparties.co/${card.image.url}`}
          alt={card.nameRU}
        />
        <figcaption className="card__header">
          <div className="card__info">
            <h2 className="card__title">{card.nameRU}</h2>
            <p className="card__subtitle">
              {handleTimeTransformation(card.duration)}
            </p>
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
