import "./Header.css";
import React from "react";
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Burger from "../Burger/Burger";

function Header() {
  const { pathname } = useLocation();

  const [isBurger, setBurger] = useState(false);

  const handleSwitchBurger = () => {
    setBurger(!isBurger);
  };

  return (
    <header className="header">
      <Logo />
      {pathname === "/" ? (
        <div className="header__auth">
          <Link to="/sign-up" className="header__link">
            Регистрация
          </Link>
          <Link to="/sign-up" className="header__link header__link_type_login">
            Войти
          </Link>
        </div>
      ) : (
        <>
          <div className="header__container">
            <Navigation />
          </div>
          <button
            className="header__burger-button"
            onClick={handleSwitchBurger}
          ></button>
          {isBurger && <Burger setBurger={handleSwitchBurger} />}
        </>
      )}
    </header>
  );
}

export default Header;
