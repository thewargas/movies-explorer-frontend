import "./MoviesCardList.css";
import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import initialCards from "../../utils/movies";
import useWindowSize from "../../hooks/getWindowSize";
import Preloader from "../Preloader/Preloader";

function MoviesCardList({ isLoading, movies }) {
  const { pathname } = useLocation();
  const size = useWindowSize();
  const [cards, setCards] = useState(movies);
  const [moreMovies, setMoreMovies] = useState(null);
  const [isMoreButton, setMoreButton] = useState(false);

  const savedMovies = initialCards.slice(0, 3);

  useEffect(() => {
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
  }, [size.width, movies]);

  useEffect(() => {
    if (movies.length < cards.length + moreMovies) {
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
            <h2 className="cards__title">Ничего не найдено</h2>
          ) : (
            <>
              {pathname === "/movies"
                ? cards.map((card) => {
                    return <MoviesCard key={card.id} card={card} />;
                  })
                : savedMovies.map((card) => {
                    return <MoviesCard key={card._id} card={card} />;
                  })}
              {pathname === "/movies" && isMoreButton && (
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
