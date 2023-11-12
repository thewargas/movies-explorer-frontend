import "./MoviesCard.css";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function MoviesCard({
  card,
  likeCard,
  dislikeCard,
  dislikeSavedCard,
  savedMovies,
}) {
  const { pathname } = useLocation();

  const [isSave, setSave] = useState(false);

  const [isDeleted, setDeleted] = useState(false);

  const handleTimeTransformation = (duration) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${
      (hours > 0 ? `${hours}ч ` : "") + (minutes > 0 ? `${minutes}м` : "")
    }`;
  };

  useEffect(() => {
    if (pathname === "/movies") {
      if (savedMovies.some((movie) => movie.movieId === card.id)) {
        setSave(true);
      } else {
        setSave(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [savedMovies, card.id]);

  const handleSaveCard = () => {
    likeCard({
      country: card.country,
      director: card.director,
      duration: card.duration,
      year: card.year,
      description: card.description,
      image: `https://api.nomoreparties.co/${card.image.url}`,
      trailerLink: card.trailerLink,
      thumbnail: `https://api.nomoreparties.co/${card.image.formats.thumbnail.url}`,
      movieId: card.id,
      nameRU: card.nameRU,
      nameEN: card.nameEN,
    });
  };

  const handleDislikeCard = () => {
    dislikeCard(card._id);
    setDeleted(true);
  };

  const handleDislikeSavedCard = () => {
    dislikeSavedCard(card.id);
  };

  return (
    !isDeleted && (
      <article className="card">
        <figure className="card__container">
          <a
            href={
              card.nameRU === "Виллалобос"
                ? `https://www.youtube.com/watch?v=dYIcAGQDZno`
                : card.trailerLink
            }
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="card__image"
              src={
                pathname === "/saved-movies"
                  ? `${card.image}`
                  : `https://api.nomoreparties.co/${card.image.url}`
              }
              alt={card.nameRU}
            />
          </a>

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
                  handleDislikeCard();
                }}
              ></button>
            ) : (
              <button
                type="button"
                className={`card__save-button ${
                  isSave && `card__save-button_active`
                }`}
                onClick={() => {
                  if (isSave) {
                    handleDislikeSavedCard();
                  } else {
                    handleSaveCard();
                  }
                }}
              ></button>
            )}
          </figcaption>
        </figure>
      </article>
    )
  );
}

export default MoviesCard;
