import "./AuthForm.css";
import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import useFormsValidation from "../../hooks/useFormsValidation";

function AuthForm({
  title,
  buttonText,
  text,
  link,
  textPath,
  onSubmit,
  apiError,
}) {
  const { handleChangeInput, inputs, isError, messageError, isValidity } =
    useFormsValidation({});

  const formRef = useRef();

  const { pathname } = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(inputs);
  };

  return (
    <div className="auth">
      <Logo />
      <h2 className="auth__title">{title}</h2>
      <form
        className="auth__form"
        name="auth-form"
        ref={formRef}
        onSubmit={handleSubmit}
        noValidate
      >
        <div>
          {pathname === "/signup" && (
            <div className="auth__input-container">
              <p className="auth__input-title">Имя</p>
              <input
                className={`auth__input ${
                  isError.name && `auth__input_type_error`
                }`}
                name="name"
                type="text"
                value={inputs.name || ""}
                onChange={handleChangeInput}
                placeholder="Введите имя"
                pattern="^[\-\sa-zA-Zа-яА-Я]*$"
                minLength={3}
                required
              />
              <span
                className={`auth__input-error ${
                  isError.name && "auth__input-error_active"
                }`}
              >
                {isError.name &&
                  (messageError.name === `Введите данные в указанном формате.`
                    ? `Поле должно содержать только латиницу, кириллицу, пробел или дефис.`
                    : messageError.name)}
              </span>
            </div>
          )}
          <div className="auth__input-container">
            <p className="auth__input-title">E-mail</p>
            <input
              className={`auth__input ${
                isError.email && `auth__input_type_error`
              }`}
              name="email"
              type="email"
              value={inputs.email || ""}
              onChange={handleChangeInput}
              placeholder="Введите email"
              required
            />
            <span
              className={`auth__input-error ${
                isError.email && "auth__input-error_active"
              }`}
            >
              {isError.email && messageError.email}
            </span>
          </div>
          <div className="auth__input-container">
            <p className="auth__input-title">Пароль</p>
            <input
              className={`auth__input ${
                isError.password && `auth__input_type_error`
              }`}
              name="password"
              type="password"
              value={inputs.password || ""}
              onChange={handleChangeInput}
              placeholder="Введите пароль"
              minLength={6}
              required
            />
            <span
              className={`auth__input-error ${
                isError.password && "auth__input-error_active"
              }`}
            >
              {isError.password && messageError.password}
            </span>
          </div>
        </div>
        <div>
          {apiError && <p className="auth__api-error">{apiError}</p>}
          <button
            className={`auth__submit-button ${
              !isValidity && `auth__submit-button_type_disabled`
            }`}
            type="submit"
            disabled={!isValidity}
          >
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
