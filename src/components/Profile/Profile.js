import "./Profile.css";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [inputs, setInputs] = useState({
    name: "Виталий",
    email: "pochta@yandex.ru",
  });
  const [isEdit, setEdit] = useState(false);
  const [isValidity, setValidity] = useState(true);
  const formRef = useRef();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleEdit = () => {
    setEdit(!isEdit);
  };

  const handleLogout = () => {
    navigate("/", { replace: true });
  };

  function handleChangeInput(e) {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    setValidity(formRef.current.checkValidity());
  }

  return (
    <main className="profile">
      <h2 className="profile__title">Привет, Виталий!</h2>
      <form className="profile__form" onSubmit={handleSubmit} ref={formRef}>
        <div>
          <div className="profile__input-container">
            <p className="profile__input-title">Имя</p>
            <input
              className="profile__input"
              name="name"
              type="text"
              value={inputs.name || ""}
              onChange={handleChangeInput}
              placeholder="Введите имя"
              minLength={2}
              required
              disabled={!isEdit}
            />
          </div>
          <div className="profile__input-container">
            <p className="profile__input-title">E-mail</p>
            <input
              className="profile__input"
              name="email"
              type="email"
              value={inputs.email || ""}
              onChange={handleChangeInput}
              placeholder="Введите email"
              required
              disabled={!isEdit}
            />
          </div>
        </div>

        <div className="profile__container">
          {isEdit ? (
            <>
              {/* <span className="profile__error">
                При обновлении профиля произошла ошибка.
              </span> */}
              <button
                className={`profile__save-button ${
                  !isValidity && `profile__save-button_disabled`
                }`}
                type="submit"
                onClick={handleEdit}
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
                onClick={handleLogout}
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
