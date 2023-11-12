import "./Movies.css";
import React, { useEffect, useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { getMovies } from "../../utils/MoviesApi";

function Movies({
  isLoading,
  setLoading,
  likeCard,
  dislikeSavedCard,
  savedMovies,
  isInputsDisabled,
  setInputsDisabled,
}) {
  const [movies, setMovies] = useState(() => {
    return JSON.parse(localStorage.getItem("movies")) || [];
  });
  const [isChecked, setChecked] = useState(() => {
    return JSON.parse(localStorage.getItem("isChecked")) || false;
  });
  const [searchedText, setSearchedText] = useState(() => {
    return JSON.parse(localStorage.getItem("searchInput")) || "";
  });

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  useEffect(() => {
    localStorage.setItem("isChecked", JSON.stringify(isChecked));
  }, [isChecked]);

  useEffect(() => {
    localStorage.setItem("searchInput", JSON.stringify(searchedText));
  }, [searchedText]);

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
    setLoading(true);
    setInputsDisabled(true);
    getMovies()
      .then((res) => {
        setSearchedText(inputs.search);
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
        setInputsDisabled(false);
      });
  }

  return (
    <main className="movies">
      <SearchForm
        searchCards={searchCards}
        isChecked={isChecked}
        setChecked={setChecked}
        searchedText={searchedText}
        isInputsDisabled={isInputsDisabled}
      />
      <MoviesCardList
        isLoading={isLoading}
        movies={movies}
        likeCard={likeCard}
        dislikeSavedCard={dislikeSavedCard}
        savedMovies={savedMovies}
      />
    </main>
  );
}

export default Movies;
