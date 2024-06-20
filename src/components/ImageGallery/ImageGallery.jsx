import ImageCard from "../ImageCard/ImageCard";

import css from './ImageGallery.module.css';

import PropTypes from 'prop-types';

function ImageGallery({ images, onImageClick }) {
  return (
    <ul className={css.gallery}>
      {images.map(({ id, urls: { small, regular }, description }) => (
        <li className={css.galleryItem} key={id}>
          <ImageCard
            url={small}
            description={description}
            onImageClick={() => onImageClick({ url: regular, description })} />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.array,
  onImageClick: PropTypes.func,
}