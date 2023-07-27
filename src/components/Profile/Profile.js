import "./Profile.css";
import React, { useRef, useState, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import useFormsValidation from "../../hooks/useFormsValidation";

function Profile({ onLogout, onSubmit, apiError }) {
  const currentUser = React.useContext(CurrentUserContext);

  const {
    handleChangeInput,
    inputs,
    isError,
    messageError,
    isValidity,
    setInputs,
    setValidity,
  } = useFormsValidation({});

  const [isEdit, setEdit] = useState(false);
  const formRef = useRef();

  useEffect(() => {
    setInputs({
      ...inputs,
      userName: currentUser.name,
      userEmail: currentUser.email,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  useEffect(() => {
    if (
      `${inputs.userName + inputs.userEmail}`.toLowerCase() ===
      `${currentUser.name + currentUser.email}`.toLowerCase()
    ) {
      setValidity(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputs]);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(inputs);
  };

  const handleEdit = () => {
    setEdit(!isEdit);
  };

  return (
    <main className="profile">
      <h2 className="profile__title">Привет, Виталий!</h2>
      <form className="profile__form" onSubmit={handleSubmit} ref={formRef}>
        <div>
          <div className="profile__input-container">
            <p className="profile__input-title">Имя</p>
            <input
              className={`profile__input`}
              name="userName"
              type="text"
              value={inputs.userName || ""}
              onChange={handleChangeInput}
              placeholder="Введите имя"
              pattern="^[\-\sa-zA-Zа-яА-Я]*$"
              minLength={3}
              required
              disabled={!isEdit}
            />
          </div>
          <span
            className={`profile__input-error ${
              isError.userName && "profile__input-error_active"
            }`}
          >
            {isError.userName &&
              (messageError.userName === `Введите данные в указанном формате.`
                ? `Поле должно содержать только латиницу, кириллицу, пробел или дефис.`
                : messageError.userName)}
          </span>
          <div className="profile__input-container">
            <p className="profile__input-title">E-mail</p>
            <input
              className={`profile__input`}
              name="userEmail"
              type="email"
              value={inputs.userEmail || ""}
              onChange={handleChangeInput}
              placeholder="Введите email"
              required
              disabled={!isEdit}
            />
          </div>
          <span
            className={`profile__input-error ${
              isError.userEmail && "profile__input-error_active"
            }`}
          >
            {isError.userEmail && messageError.userEmail}
          </span>
        </div>

        <div className="profile__container">
          {isEdit ? (
            <>
              {apiError && (
                <span className="profile__api-error">{apiError}</span>
              )}
              <button
                className={`profile__save-button ${
                  !isValidity && `profile__save-button_disabled`
                }`}
                type="submit"
                disabled={!isValidity}
              >
                Сохранить
              </button>
            </>
          ) : (
            <>
              <button
                className="profile__edit-button"
                type="button"
                onClick={handleEdit}
              >
                Редактировать
              </button>
              <button
                className="profile__exit-button"
                type="button"
                onClick={onLogout}
              >
                Выйти из аккаунта
              </button>
            </>
          )}
        </div>
      </form>
    </main>
  );
}

export default Profile;
