export const BASE_URL = "https://api.movies-thewargas.nomoredomains.rocks";

function handleResponse(response) {
  if (response.ok) {
    return response.json();
  }

  return Promise.reject(response.status);
}

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  }).then(handleResponse);
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(handleResponse);
};

export const checkToken = (data) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${data}`,
    },
  }).then(handleResponse);
};

export const getInitialInfo = () => {
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then(handleResponse);
};

export const getUserMovies = () => {
  return fetch(`${BASE_URL}/movies`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then(handleResponse);
};

export const changeUserInfo = (name, email) => {
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    method: "PATCH",
    body: JSON.stringify({ name, email }),
  }).then(handleResponse);
};

export const likeMovie = (data) => {
  return fetch(`${BASE_URL}/movies`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    method: "POST",
    body: JSON.stringify(data),
  }).then(handleResponse);
};

export const dislikeMovie = (id) => {
  return fetch(`${BASE_URL}/movies/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    method: "DELETE",
  }).then(handleResponse);
};
