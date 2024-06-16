import ImageCard from "../ImageCard/ImageCard";
import css from './ImageGallery.module.css';

const ImageGallery = ({ images, onImageClick}) => {
return (
    <ul className={css.gallery}>
      {images.map((image) => (
        <li className={css.galleryItem} key={image.id}>
          <ImageCard
            image={image}
            onImageClick={() =>
              onImageClick(image.urls.regular, image.alt_description)
            }
          />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;