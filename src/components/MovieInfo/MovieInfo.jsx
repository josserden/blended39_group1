export const MovieInfo = ({
  movie: {
    title,
    poster_path,
    release_date,
    vote_average,
    overview,
    genres = [],
  },
}) => {
  return (
    <div style={{ display: 'flex', gap: '50px', padding: '50px' }}>
      <div>
        <img
          alt={title}
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
        />
      </div>
      <div>
        <h1>
          {title} {release_date && `(${release_date})`}
        </h1>
        <p>User score: {vote_average * 10 + '% '}</p>
        <h2> Overview</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p> {genres.map(genre => genre.name + ' ')} </p>
      </div>
    </div>
  );
};
