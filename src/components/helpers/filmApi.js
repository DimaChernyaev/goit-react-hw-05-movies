import axios from 'axios';

const AUTH_TOKEN = 'ce1c433bf23cc41cab87899af39da180';
axios.defaults.params = {
  api_key: AUTH_TOKEN,
};

// Запит за популярними фільмами
export async function getTrendingFilms() {
  const responce = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day`
  );

  return responce.data;
}

// Запит за конкретним фільмом 
export async function getCurrentFilms(id) {

  const responce = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}`
  );

  return responce.data;
}

// Запит за кастом та коментаром
export async function getInfoFilm(id, category) {
  const responce = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/${category}`
  );

  return responce.data;
}

// Запит за фільмом по пошуку за іменнем
export async function getSearchFilm(movie) {
  const responce = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${movie}`
  );

  return responce.data;
}





