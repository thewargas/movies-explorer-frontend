import "./NavTab.css";
import React from "react";

function NavTab() {
  return (
    <section className="navtab">
      <ul className="navtab__list">
        <li className="navtab__element">
          <a href="#AboutProject" className="navtab__link">
            О проекте
          </a>
        </li>
        <li className="navtab__element">
          <a href="#Techs" className="navtab__link">
            Технологии
          </a>
        </li>
        <li className="navtab__element">
          <a href="#AboutMe" className="navtab__link">
            Студент
          </a>
        </li>
      </ul>
    </section>
  );
}

export default NavTab;
