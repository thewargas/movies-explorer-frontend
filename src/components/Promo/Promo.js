import "./Promo.css";
import React from "react";
import NavTab from "../NavTab/NavTab";

function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <div className="promo__overlay"></div>
      <NavTab />
    </section>
  );
}

export default Promo;
