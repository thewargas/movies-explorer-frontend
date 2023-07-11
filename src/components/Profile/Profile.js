import "./Profile.css";
import React, { useState } from "react";

function Profile() {
  const [inputs, setInputs] = useState({ name: "Виталий" });

  function handleChangeInput(e) {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <main className="profile">
      <h2 className="profile__title">Привет, Виталий!</h2>
      <form>
        <div className="profile__input-container">
          <p className="profile__input-title">Имя</p>
          <input
            className="profile__input"
            name="name"
            type="text"
            value={inputs.name || ""}
            onChange={handleChangeInput}
            placeholder=""
            required
          ></input>
        </div>
      </form>
    </main>
  );
}

export default Profile;
