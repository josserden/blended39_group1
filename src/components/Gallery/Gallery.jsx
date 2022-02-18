import PropTypes from 'prop-types';
import GalleryItem from 'components/GalleryItem/GalleryItem';

import { ImageGallery } from './Gallery.styled';

export function Gallery({ movies, onClick }) {
  return (
    <ImageGallery onClick={onClick}>
      {movies.map(movie => (
        <GalleryItem
          key={movie.id}
          alt={movie.original_title}
          src={movie.poster_path}
          title={movie.title}
          id={movie.id}
        />
      ))}
    </ImageGallery>
  );
}

Gallery.defaultProps = {
  onClick: () => null,
};

Gallery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
  onClick: PropTypes.func,
};
