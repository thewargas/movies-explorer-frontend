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
          <h3 className="about-me__name-title">Виталий</h3>
          <h4 className="about-me__info-title">Фронтенд-разработчик, 30 лет</h4>
          <p className="about-me__description">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
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
