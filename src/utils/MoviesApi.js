const BASE_URL = "https://api.nomoreparties.co/beatfilm-movies";

function handleResponse(response) {
  if (response.ok) {
    return response.json();
  }

  return Promise.reject(`Ошибка: ${response.status}`);
}

export const getMovies = () => {
  return fetch(`${BASE_URL}`, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then(handleResponse);
};
