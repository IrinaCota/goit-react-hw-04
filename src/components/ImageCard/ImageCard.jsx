import css from './ImageCard.module.css';
import PropTypes from 'prop-types';

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

export default ImageCard;

ImageCard.propTypes = {
  image: PropTypes.shape({
    urls: PropTypes.shape({
      small: PropTypes.string.isRequired,
    }).isRequired,
    alt_description: PropTypes.string,
  }).isRequired,
  onImageClick: PropTypes.func.isRequired,
};