import "./Navigation.css";
import React from "react";
import { useLocation, Link } from "react-router-dom";
import profileIcon from "../../images/profile-icon.png";

function Navigation({ isOpen }) {
  const { pathname } = useLocation();

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {isOpen && (
          <li className="navigation__element">
            <Link to="/" className="navigation__link">
              Главная
            </Link>
          </li>
        )}
        <li className="navigation__element">
          <Link to="/" className="navigation__link navigation__link_active">
            Фильмы
          </Link>
          {pathname === "/films" && (
            <div className="navigation__line-link"></div>
          )}
        </li>
        <li className="navigation__element">
          <Link to="/" className="navigation__link">
            Сохранённые фильмы
          </Link>
          {pathname === "/saved-films" && (
            <div className="navigation__line-link"></div>
          )}
        </li>
      </ul>
      <Link to="/profile" className="navigation__profile-link">
        Аккаунт
        <img
          className="navigation__profile-image"
          src={profileIcon}
          alt="Иконка профиля"
        />
      </Link>
    </nav>
  );
}

export default Navigation;
