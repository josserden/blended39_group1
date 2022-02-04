import React from 'react';
import PropTypes from 'prop-types';
import './ImageGallery.css';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ images = [], onImgClick }) => {
  return (
    <ul className="ImageGallery">
      {images.map(({ id, largeImageURL, webformatURL, tags }) => (
        <ImageGalleryItem
          key={id}
          image={webformatURL}
          tags={tags}
          largeImageURL={largeImageURL}
          onModal={onImgClick}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};

export default ImageGallery;
