import "./SavedMovies.css";
import React, { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies({ savedMovies, isLoading, dislikeCard }) {
  const [isChecked, setChecked] = useState(false);

  const [movies, setMovies] = useState(savedMovies);

  const filterMoviesByName = (cards, inputs) => {
    return cards.filter((card) => {
      return (
        card.nameRU.toLowerCase().includes(inputs.search.toLowerCase()) ||
        card.nameEN.toLowerCase().includes(inputs.search.toLowerCase())
      );
    });
  };

  const filterMoviesByDuration = (cards) => {
    return cards.filter((card) => card.duration <= 40);
  };

  function searchCards(inputs) {
    const filtredMovies = filterMoviesByName(savedMovies, inputs);
    if (isChecked) {
      setMovies(filterMoviesByDuration(filtredMovies));
    } else {
      setMovies(filtredMovies);
    }
  }

  return (
    <main className="saved-movies">
      <SearchForm
        searchCards={searchCards}
        isChecked={isChecked}
        setChecked={setChecked}
      />
      <MoviesCardList
        isLoading={isLoading}
        movies={movies}
        dislikeCard={dislikeCard}
      />
    </main>
  );
}

export default SavedMovies;
