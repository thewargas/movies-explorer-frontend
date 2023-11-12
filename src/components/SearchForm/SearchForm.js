import "./SearchForm.css";
import React, { useState, useEffect } from "react";
import searchIcon from "../../images/search-icon.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import useFormsValidation from "../../hooks/useFormsValidation";

function SearchForm({
  searchCards,
  isChecked,
  setChecked,
  searchedText,
  isInputsDisabled,
}) {
  const { handleChangeInput, inputs, setInputs } = useFormsValidation();
  const [isEmpty, setEmpty] = useState(false);

  useEffect(() => {
    setInputs({
      ...inputs,
      search: searchedText,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchedText]);

  useEffect(() => {
    handleSearchCards();
    setEmpty(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChecked]);

  function handleSearchCards() {
    if (!inputs.search) {
      setEmpty(true);
    } else {
      setEmpty(false);
      searchCards(inputs);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearchCards();
  };

  return (
    <section className="search">
      <form
        className="search__form"
        name="search-form"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="search__container">
          <img src={searchIcon} className="search__icon" alt="Иконка поиска" />
          <input
            className={`search__input ${isEmpty && `search__input_type_error`}`}
            placeholder={isEmpty ? "Введите ключевое слово" : "Фильм"}
            name="search"
            value={inputs.search || ""}
            onChange={handleChangeInput}
            disabled={isInputsDisabled}
            required
          />
          <button
            className="search__button"
            type="submit"
            disabled={isInputsDisabled}
          ></button>
        </div>
        <FilterCheckbox
          isChecked={isChecked}
          setChecked={setChecked}
          isInputsDisabled={isInputsDisabled}
        />
      </form>
    </section>
  );
}

export default SearchForm;
