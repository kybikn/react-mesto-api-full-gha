import { useEffect, useState, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import notFoundImg from '../images/notfound.jpg';

function Card({ card, onCardClick, onCardLike, onDeletePopup }) {
    const currentUser = useContext(CurrentUserContext);
    const isOwn = card.owner._id === currentUser._id;
    const isLiked = card.likes.some(like => like._id === currentUser._id);
    const [imageExist, setImageExist] = useState(true);

    function handleClick() {
        onCardClick(card);
    }

    function handleLikeClick() {
        onCardLike(card);
    }

    function handleDeleteClick() {
        onDeletePopup(card);
    }

    // проверка рабочести url картинки
    async function imageExists(imgUrl) {
        if (!imgUrl) {
            return false;
        }
        return new Promise((res) => {
            const image = new Image();
            image.onload = () => res(true);
            image.onerror = () => res(false);
            image.src = imgUrl;
        });
    }

    useEffect(() => {
        imageExists(card.link)
            .then((res) => {
                if (!res) {
                    console.log(`Image for card ${card.name} not found`);
                    setImageExist(false);
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }, [card.link, card.name]);

    return (
        <li>
            <figure className="card">
                <img
                    className="card__img"
                    src={imageExist ? card.link : notFoundImg}
                    alt={card.name}
                    onClick={handleClick}
                />
                {isOwn &&
                    <button
                        className="button card__button-remove"
                        onClick={handleDeleteClick}
                    >
                    </button>}
                <figcaption className="card__description">
                    <h2 className="card__title">{card.name}</h2>
                    <div>
                        <button
                            className={`button ${isLiked ? 'card__button-like_active' : ''} card__button-like`}
                            type="button"
                            onClick={handleLikeClick}
                        ></button>
                        <div className="card__num-likes">{card.likes.length}</div>
                    </div>
                </figcaption>
            </figure>
        </li>
    )
}

export default Card;