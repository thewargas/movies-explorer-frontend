import "./SavedMovies.css";
import React, { useState, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies({
  savedMovies,
  isLoading,
  dislikeCard,
  isInputsDisabled,
  setInputsDisabled,
}) {
  const [isChecked, setChecked] = useState(false);

  const [movies, setMovies] = useState(savedMovies);

  useEffect(() => {
    setMovies(savedMovies);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [savedMovies]);

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
    setInputsDisabled(true);
    const filtredMovies = filterMoviesByName(savedMovies, inputs);
    if (isChecked) {
      setMovies(filterMoviesByDuration(filtredMovies));
    } else {
      setMovies(filtredMovies);
    }
    setInputsDisabled(false);
  }

  return (
    <main className="saved-movies">
      <SearchForm
        searchCards={searchCards}
        isChecked={isChecked}
        setChecked={setChecked}
        isInputsDisabled={isInputsDisabled}
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
