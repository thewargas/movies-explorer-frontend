import "./App.css";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import ProtectedAuthRoute from "../ProtectedAuthRoute/ProtectedAuthRoute";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import * as MainApi from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  const { pathname } = useLocation();
  const [isLoading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);
  const [apiSuccess, setApiSuccess] = useState(null);
  const [isInputsDisabled, setInputsDisabled] = useState(false);

  const [savedMovies, setSavedMovies] = useState([]);

  const [currentUser, setCurrentUser] = useState({});

  const [isLoggedIn, setLoggedIn] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      const jwt = localStorage.getItem("jwt");
      MainApi.checkToken(jwt)
        .then(() => {
          setLoggedIn(true);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setLoggedIn(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      Promise.all([MainApi.getInitialInfo(), MainApi.getUserMovies()])
        .then(([userData, moviesData]) => {
          setCurrentUser(userData);
          setSavedMovies(moviesData);
        })

        .catch((error) => {
          console.log(error);
        });
    }
  }, [isLoggedIn]);

  useEffect(() => {
    setApiError(null);
    setApiSuccess(null);
  }, [pathname]);

  function handleSetApiError(status) {
    if (status === 409) {
      setApiError("Пoльзователь с таким email уже зарегистрирован");
    }
    if (status === 401) {
      setApiError("Введена неправильная почта или пароль");
    }
    if (status === 500) {
      setApiError("На сервере произошла ошибка");
    }
  }

  function handleRegister(inputs) {
    setInputsDisabled(true);
    MainApi.register(inputs.name, inputs.email, inputs.password)
      .then(() => {
        handleAuthorize(inputs);
      })
      .catch((error) => {
        handleSetApiError(error);
      })
      .finally(() => {
        setInputsDisabled(false);
      });
  }

  function handleAuthorize(inputs) {
    setInputsDisabled(true);
    MainApi.authorize(inputs.email, inputs.password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          setLoggedIn(true);
          navigate("/movies", { replace: true });
          setApiError(null);
        }
      })
      .catch((error) => {
        handleSetApiError(error);
      })
      .finally(() => {
        setInputsDisabled(false);
      });
  }

  function handleUpdateUser(inputs, handleEdit) {
    setInputsDisabled(true);
    MainApi.changeUserInfo(inputs.userName, inputs.userEmail)
      .then((data) => {
        setCurrentUser(data);
        handleEdit();
        setApiSuccess(true);
        setApiError(null);
      })
      .catch((error) => {
        handleSetApiError(error);
      })
      .finally(() => {
        setInputsDisabled(false);
      });
  }

  function handleLikeCard(card) {
    MainApi.likeMovie(card)
      .then((card) => {
        setSavedMovies([card, ...savedMovies]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleDislikeSavedCard(id) {
    const savedMovie = savedMovies.find((movie) => movie.movieId === id);
    handleDislikeCard(savedMovie._id);
  }

  function handleDislikeCard(id) {
    MainApi.dislikeMovie(id)
      .then(() => {
        setSavedMovies((movies) => movies.filter((movie) => movie._id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleLogout() {
    localStorage.removeItem("jwt");
    localStorage.removeItem("movies");
    localStorage.removeItem("isChecked");
    localStorage.removeItem("searchInput");
    setLoggedIn(false);
    navigate("/", { replace: true });
    window.location.reload();
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        {(pathname === "/" ||
          pathname === "/movies" ||
          pathname === "/saved-movies" ||
          pathname === "/profile") && <Header loggedIn={isLoggedIn} />}
        <Routes>
          <Route path="/" element={<Main />} />

          <Route
            path="/movies"
            element={
              <ProtectedRoute
                element={Movies}
                loggedIn={isLoggedIn}
                isLoading={isLoading}
                setLoading={setLoading}
                likeCard={handleLikeCard}
                dislikeSavedCard={handleDislikeSavedCard}
                savedMovies={savedMovies}
                isInputsDisabled={isInputsDisabled}
                setInputsDisabled={setInputsDisabled}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                element={SavedMovies}
                loggedIn={isLoggedIn}
                isLoading={isLoading}
                setLoading={setLoading}
                savedMovies={savedMovies}
                dislikeCard={handleDislikeCard}
                isInputsDisabled={isInputsDisabled}
                setInputsDisabled={setInputsDisabled}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                element={Profile}
                loggedIn={isLoggedIn}
                onLogout={handleLogout}
                onSubmit={handleUpdateUser}
                apiError={apiError}
                apiSuccess={apiSuccess}
                isInputsDisabled={isInputsDisabled}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <ProtectedAuthRoute
                element={Register}
                loggedIn={isLoggedIn}
                handleRegister={handleRegister}
                apiError={apiError}
                isInputsDisabled={isInputsDisabled}
              />
            }
          />
          <Route
            path="/signin"
            element={
              <ProtectedAuthRoute
                element={Login}
                loggedIn={isLoggedIn}
                handleAuthorize={handleAuthorize}
                apiError={apiError}
                isInputsDisabled={isInputsDisabled}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {(pathname === "/" ||
          pathname === "/movies" ||
          pathname === "/saved-movies") && <Footer />}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
