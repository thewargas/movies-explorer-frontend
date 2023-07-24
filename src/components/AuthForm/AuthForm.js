import "./AuthForm.css";
import React, { useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";

function AuthForm({ title, buttonText, text, link, textPath, submitPath }) {
  const [inputs, setInputs] = useState({});

  const formRef = useRef();

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(submitPath, { replace: true });
  };

  function handleChangeInput(e) {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="auth">
      <Logo />
      <h2 className="auth__title">{title}</h2>
      <form
        className="auth__form"
        name="auth-form"
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <div>
          {pathname === "/signup" && (
            <div className="auth__input-container">
              <p className="auth__input-title">Имя</p>
              <input
                className={`auth__input`}
                name="name"
                type="text"
                value={inputs.name || ""}
                onChange={handleChangeInput}
                placeholder="Введите имя"
                minLength={2}
                required
              />
              {/* <span
              className={`auth__input-error ${
                isError.name && "auth__input-error_active"
              }`}
            >
              {isError.name && messageError.name}
            </span> */}
            </div>
          )}
          <div className="auth__input-container">
            <p className="auth__input-title">E-mail</p>
            <input
              className={`auth__input`}
              name="email"
              type="email"
              value={inputs.email || ""}
              onChange={handleChangeInput}
              placeholder="Введите email"
              required
            />
            {/* <span
            className={`auth__input-error ${
              isError.email && "auth__input-error_active"
            }`}
          >
            {isError.email && messageError.email}
          </span> */}
          </div>
          <div className="auth__input-container">
            <p className="auth__input-title">Пароль</p>
            <input
              className={`auth__input`}
              name="password"
              type="password"
              value={inputs.password || ""}
              onChange={handleChangeInput}
              placeholder="Введите пароль"
              required
            />
            {/* <span
            className={`auth__input-error ${
              isError.password && "auth__input-error_active"
            }`}
          >
            {isError.password && messageError.password}
          </span> */}
          </div>
        </div>
        <div>
          <button className="auth__submit-button" type="submit">
            {buttonText}
          </button>
          <p className="auth__text">
            {text}
            <Link to={textPath} className="auth__link">
              {" "}
              {link}
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default AuthForm;
