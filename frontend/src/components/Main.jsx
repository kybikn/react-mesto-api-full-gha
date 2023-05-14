import { useContext } from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({ cards, onEditAvatar, onEditProfile, onAddPlace, onCardClick, onCardLike, onDeletePopup }) {
  const currentUser = useContext(CurrentUserContext);

  const galleryList = cards.map((card) =>
    <Card
      key={card._id}
      card={card}
      onCardClick={onCardClick}
      onCardLike={onCardLike}
      onDeletePopup={onDeletePopup}
    />
  );

  return (
    <main>
      <section className="profile">
        <div className="profile__content">
          <div
            className="profile__avatar-box"
            onClick={onEditAvatar}
          >
            <button
              className="profile__button-avatar"
              type="button"
            ></button>
            <img
              className="profile__img profile__avatar-img"
              src={currentUser.avatar}
              alt="Аватар"
            />
          </div>
          <div className="profile__text">
            <div className="profile__name">
              <h1 className="profile__title">{currentUser.name}</h1>
              <button
                className="button profile__button-edit"
                type="button"
                onClick={onEditProfile}
              ></button>
            </div>
            <p className="profile__subtitle">{currentUser.about}</p>
          </div>
          <button
            className="button profile__button-add"
            type="button"
            onClick={onAddPlace}
          ></button>
        </div>
      </section>
      <section
        className="gallery"
        aria-label="Галерея карточек"
      >
        <ul className="gallery__list">
          {galleryList}
        </ul>
      </section>
    </main>
  );
}

export default Main;
