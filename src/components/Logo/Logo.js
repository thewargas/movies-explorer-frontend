import "./Logo.css";
import React from "react";
import { Link } from "react-router-dom";
import logoMovies from "../../images/logo-movies.svg";

function Logo() {
  return (
    <Link to="/" className="logo">
      <img src={logoMovies} alt="Логотип" />
    </Link>
  );
}

export default Logo;
