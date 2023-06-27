import "./AboutMe.css";
import React from "react";
import myPhoto from "../../images/my-photo.png";
import Portfolio from "../Portfolio/Portfolio";

function AboutMe() {
  return (
    <section className="section section_type_about-me about-me" id="AboutMe">
      <h2 className="section-title">Студент</h2>
      <hr className="section-underline"></hr>
      <div className="about-me__container">
        <div className="about-me__info">
          <h3 className="about-me__name-title">Василий</h3>
          <h4 className="about-me__info-title">Фронтенд-разработчик, 21 год</h4>
          <p className="about-me__description">
            Я родился и живу в Санкт-Петербурге, учусь на факультет прикладной
            информатики в экономике МБИ. Я люблю слушать музыку, а ещё увлекаюсь
            хоккеем. Кодить начал еще в 8м классе, ходил на курсы в
            Политехническом институте.
          </p>
          <a
            href="https://github.com/thewargas"
            className="about-me__link"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img src={myPhoto} className="about-me__image" alt="Фото студента" />
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
