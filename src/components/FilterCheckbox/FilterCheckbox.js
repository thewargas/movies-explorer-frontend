import "./FilterCheckbox.css";
import React from "react";
import { useState } from "react";

function FilterCheckbox() {
  const [isActive, setActive] = useState(true);

  return (
    <div className="checkbox">
      <div
        className={`checkbox__container ${
          !isActive && `checkbox__container_disabled`
        }`}
        onClick={() => {
          setActive(!isActive);
        }}
      >
        <button
          className={`checkbox__button ${
            !isActive && `checkbox__button_disabled`
          }`}
          type="button"
        ></button>
      </div>
      <p className="checkbox__title">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
