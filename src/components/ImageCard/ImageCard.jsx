import PropTypes from 'prop-types';
import css from './ImageCard.module.css';

const ImageCard = ({ image, onImageClick }) => {
  return (
    <div>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={css.image}
        onClick={onImageClick}
      />
    </div>
  );
}

ImageCard.propTypes = {
  image: PropTypes.shape({
    urls: PropTypes.shape({
      small: PropTypes.string.isRequired,
    }).isRequired,
    alt_description: PropTypes.string,
  }).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageCard;
