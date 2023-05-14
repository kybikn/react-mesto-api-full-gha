import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header({ loggedIn, email, onSignOut }) {
  const [isBurgerOpen, setBurgerOpen] = useState(false);

  function handleClick() {
    onSignOut();
  }

  function handleBurgerClick() {
    setBurgerOpen(!isBurgerOpen);
  }

  return (
    <header className="header">
      <>{
        loggedIn
          ?
          <div className="header__container">
            <div className="header__box">
              <div className="header__logo"></div>
              <div className={`burger ${isBurgerOpen && 'burger_active'}`}
                onClick={handleBurgerClick}>
                <span className="burger__line burger__line_up"></span>
                <span className="burger__line burger__line_middle"></span>
                <span className="burger__line burger__line_down"></span>
              </div>
            </div>
            <ul className={`header__nav-box ${isBurgerOpen && 'header__nav-box_mobile'}`}>
              <li className="header__nav-email">{email}</li>
              <li>
                <button className="header__button"
                  onClick={handleClick}>Выйти</button>
              </li>
            </ul>
          </div>
          :
          <>
            <div className="header__logo"></div>
            <ul className="header__nav">
              {<nav>
                <NavLink
                  to="/signup"
                  className="header__link"
                  style={({ isActive }) => {
                    return isActive ? { display: 'none' } : { display: 'block' }
                  }}
                >Регистрация</NavLink>
                <NavLink
                  to="/signin"
                  className="header__link"
                  style={({ isActive }) => {
                    return isActive ? { display: 'none' } : { display: 'block' }
                  }}
                >Войти</NavLink>
              </nav>
              }
            </ul>
          </>
      }
      </>
    </header >
  );
}

export default Header;
