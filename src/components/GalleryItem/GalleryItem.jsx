import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ItemGallery } from './GalleryItem.styled';

export default function GalleryItem({ alt, src, title, id }) {
  return (
    <ItemGallery>
      <Link to={`/movies/${id}`}>
        <img
          className="GalleryItem-image"
          src={`https://image.tmdb.org/t/p/w300/${src}`}
          alt={alt}
        />
        <p>{title}</p>
      </Link>
    </ItemGallery>
  );
}

GalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
