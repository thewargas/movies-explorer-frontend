import "./Movies.css";
import React, { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { getMovies } from "../../utils/MoviesApi";

function Movies({ isLoading, setLoading }) {
  const [movies, setMovies] = useState([]);

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

  function searchCards(isChecked, inputs) {
    setLoading(true);
    getMovies()
      .then((res) => {
        const filtredMovies = filterMoviesByName(res, inputs);
        if (isChecked) {
          setMovies(filterMoviesByDuration(filtredMovies));
        } else {
          setMovies(filtredMovies);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <main className="movies">
      <SearchForm searchCards={searchCards} />
      <MoviesCardList isLoading={isLoading} movies={movies} />
    </main>
  );
}

export default Movies;
