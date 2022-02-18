import { FotoCard } from 'components/FotoCard/FotoCard';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { movieCast } from '../../moviesApi/moviesApi';

export const Cast = ({ casts = [] }) => {
  const { movieId } = useParams();
  const [castData, setCastData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getCast() {
      setLoading(true);
      try {
        const cast = await movieCast(movieId);
        console.log(cast);
        setCastData(cast);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    getCast();
  }, [movieId]);

  // const { loading, error, data } = useFetch(movieCast(movieId));

  // console.log(data);

  return (
    <ul
      style={{
        listStyle: 'none',
        display: 'flex',
        marginTop: '-10px',
        marginLeft: '-10px',
        flexWrap: 'wrap',
      }}
    >
      {castData &&
        castData.map(({ cast_id, profile_path, name, character }) => (
          <FotoCard
            key={cast_id}
            name={name}
            src={`https://image.tmdb.org/t/p/w500${profile_path}`}
            character={character}
          />
        ))}
    </ul>
  );
};
