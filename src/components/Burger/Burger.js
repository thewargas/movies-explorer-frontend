import "./Burger.css";
import React from "react";
import { useState, useEffect } from "react";
import Navigation from "../Navigation/Navigation";

function Burger({ setBurger }) {
  const [isOpen, setOpen] = useState(false);

  const handleCloseButtonClick = () => {
    setOpen(false);
    setTimeout(setBurger, 300);
  };

  useEffect(() => {
    setTimeout(setOpen(true), 300);
  }, []);

  return (
    <div className="burger">
      <div
        className={`burger__container ${isOpen && `burger__container_active`}`}
      >
        <button
          className="burger__close-button"
          onClick={handleCloseButtonClick}
        ></button>
        {isOpen && <Navigation isOpen={isOpen} />}
      </div>
      <div
        className={`burger__overlay ${isOpen && `burger__overlay_active`}`}
      ></div>
    </div>
  );
}

export default Burger;
