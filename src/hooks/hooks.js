import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'moviesApi';

export const useFetchMovies = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getTrendingMovies() {
      setLoading(true);
      try {
        const movies = await fetchTrendingMovies(1);
        setItems(movies);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
    getTrendingMovies();
  }, []);
  return { items, loading };
};
