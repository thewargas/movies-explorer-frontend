import "./FilterCheckbox.css";
import React from "react";

function FilterCheckbox({ isChecked, setChecked }) {
  return (
    <div className="checkbox">
      <div
        className={`checkbox__container ${
          !isChecked && `checkbox__container_disabled`
        }`}
        onClick={() => {
          setChecked(!isChecked);
        }}
      >
        <button
          className={`checkbox__button ${
            !isChecked && `checkbox__button_disabled`
          }`}
          type="button"
        ></button>
      </div>
      <p className="checkbox__title">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
