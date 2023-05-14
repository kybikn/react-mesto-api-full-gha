import Popup from './Popup';

function ImagePopup({ card, isOpen, onClose }) {
  return (
    <Popup
      name='photo'
      isOpen={isOpen}
      onClose={onClose}

    >
      <figure className="popup__figure">
        <img className="popup__img"
          src={card?.link}
          alt={card?.name} />
        <figcaption className="popup__img-title">{card?.name}</figcaption>
      </figure>
    </Popup >
  );
}
export default ImagePopup;
