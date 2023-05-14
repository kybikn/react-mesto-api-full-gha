import { Link } from 'react-router-dom';
import error from "../images/error.jpeg"

function NotFound() {
    return (
        <div className="not-found">
            <img className="not-found__img"
                src={error}
                alt="Ошибка" />
            <p className="not-found__text">Страница не найдена</p>
            <Link className="not-found__button"
                to="/"
            >Вернуться на главную</Link>
        </div>
    )
}
export default NotFound;