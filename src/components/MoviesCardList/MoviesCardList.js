import "./MoviesCardList.css";
import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import useWindowSize from "../../hooks/useWindowSize";
import Preloader from "../Preloader/Preloader";

function MoviesCardList({
  isLoading,
  movies,
  likeCard,
  dislikeCard,
  dislikeSavedCard,
  savedMovies,
  setDislikedCard,
}) {
  const size = useWindowSize();
  const { pathname } = useLocation();
  const [cards, setCards] = useState(movies);
  const [moreMovies, setMoreMovies] = useState(null);
  const [isMoreButton, setMoreButton] = useState(false);

  const handleCheckWidth = () => {
    if (size.width) {
      setCards(movies.slice(0, 12));
      setMoreMovies(3);
    }
    if (size.width <= 1024) {
      setCards(movies.slice(0, 8));
      setMoreMovies(2);
    }
    if (size.width <= 600) {
      setCards(movies.slice(0, 5));
      setMoreMovies(2);
    }
  };

  useEffect(() => {
    if (pathname === "/movies") {
      handleCheckWidth();
    } else {
      setCards(movies);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size.width, movies]);

  useEffect(() => {
    if (movies.length === cards.length) {
      setMoreButton(false);
    } else {
      setMoreButton(true);
    }
  }, [movies, cards, moreMovies]);

  const handleAddMoreCards = () => {
    setCards(movies.slice(0, cards.length + moreMovies));
  };

  return (
    <section className="cards">
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          {movies.length === 0 ? (
            JSON.parse(localStorage.getItem("searchInput")) && (
              <h2 className="cards__title">Ничего не найдено</h2>
            )
          ) : (
            <>
              {cards.map((card) => {
                return (
                  <MoviesCard
                    key={card.id || card._id}
                    card={card}
                    likeCard={likeCard}
                    dislikeCard={dislikeCard}
                    dislikeSavedCard={dislikeSavedCard}
                    savedMovies={savedMovies}
                    setDislikedCard={setDislikedCard}
                  />
                );
              })}
              {isMoreButton && pathname === "/movies" && (
                <button className="cards__button" onClick={handleAddMoreCards}>
                  Ещё
                </button>
              )}
            </>
          )}
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
