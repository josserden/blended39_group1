import React from 'react';
import PropTypes from 'prop-types';
import './ImageGalleryItem.css';

const ImageGalleryItem = ({ image, tags, onModal, largeImageURL }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        className="ImageGalleryItem-image"
        src={image}
        alt={tags}
        onClick={() => onModal(largeImageURL)}
      />
    </li>
  );
};

ImageGalleryItem.defaultProps = {
  image:
    'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png',
  tags: '',
};

ImageGalleryItem.propTypes = {
  image: PropTypes.string,
  tags: PropTypes.string,
  largeImageURL: PropTypes.string.isRequired,
  onModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
