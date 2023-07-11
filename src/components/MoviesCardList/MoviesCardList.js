import "./MoviesCardList.css";
import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import initialCards from "../../utils/movies";
import useWindowSize from "../../hooks/getWindowSize";

function MoviesCardList() {
  const { pathname } = useLocation();
  const size = useWindowSize();
  const [cards, setCards] = useState([]);

  const savedMovies = initialCards.slice(0, 3);

  useEffect(() => {
    if (size.width) {
      setCards(initialCards.slice(0, 12));
    }
    if (size.width <= 1024) {
      setCards(initialCards.slice(0, 8));
    }
    if (size.width <= 600) {
      setCards(initialCards.slice(0, 5));
    }
  }, [size.width]);

  return (
    <section className="cards">
      {pathname === "/movies"
        ? cards.map((card) => {
            return <MoviesCard key={card._id} card={card} />;
          })
        : savedMovies.map((card) => {
            return <MoviesCard key={card._id} card={card} />;
          })}
      {pathname === "/movies" && <button className="cards__button">Ещё</button>}
    </section>
  );
}

export default MoviesCardList;
