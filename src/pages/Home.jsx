import { useState, useEffect } from 'react';
import { getTrendingFilms } from 'components/helpers/filmApi';
import MovieList from 'components/movieList/MovieList';

const Home = () => {
  const [trandingFilms, setTrendingFilms] = useState([]);

  useEffect(() => {
    async function getAllTrandingFilms() {
      const { results } = await getTrendingFilms();
      setTrendingFilms([...results]);
    }

    getAllTrandingFilms();
  }, []);

  return <MovieList
    films={trandingFilms} 
    />;
};

export default Home;
