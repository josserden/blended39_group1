import { Gallery } from 'components/Gallery/Gallery';
import Section from 'components/Section/Section';
import { Finder } from 'components/Filter/Finder';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMoviesOnQuery } from 'moviesApi';

export const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const searchQuery = searchParams.get('query');
    if (!searchQuery) return;

    async function getMovies() {
      try {
        const data = await fetchMoviesOnQuery(searchQuery);

        setMovies(data);
      } catch (error) {
      } finally {
      }
    }
    getMovies();
  }, [query, searchParams]);

  const onSubmit = data => {
    setMovies([...data]);

    setSearchParams({ query: data });

    setQuery(searchParams.get('query'));
  };

  return (
    <main>
      <Section>
        <Finder handleOnSubmit={onSubmit} />
        <Gallery movies={movies} />
      </Section>
    </main>
  );
};
