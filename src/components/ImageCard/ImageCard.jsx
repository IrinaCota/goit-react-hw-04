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

export default ImageCard;