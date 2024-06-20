// ../ImageGallery/ImageGallery.js

import PropTypes from 'prop-types';
import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

function ImageGallery({ images, onImageClick }) {
  return (
    <ul className={css.gallery}>
      {images.map(image => (
        <li className={css.galleryItem} key={image.id}>
          <ImageCard
            image={image}
            onImageClick={() => onImageClick(image)}
          />
        </li>
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      urls: PropTypes.shape({
        small: PropTypes.string.isRequired,
        regular: PropTypes.string.isRequired,
      }).isRequired,
      alt_description: PropTypes.string,
    })
  ).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;
