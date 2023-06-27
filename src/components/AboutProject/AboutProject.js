import "./AboutProject.css";
import React from "react";

function AboutProject() {
  return (
    <section className="section about-project" id="AboutProject">
      <h2 className="section-title">О проекте</h2>
      <hr className="section-underline"></hr>
      <div className="about-project__info">
        <div className="about-project__column">
          <h3 className="about-project__subtitle">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__paragraph">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__column">
          <h3 className="about-project__subtitle">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__paragraph">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__progress-bar">
        <div className="about-project__progress-line-left">
          <div className="about-project__progress-element">1 неделя</div>
          <p className="about-project__progress-paragraph">Back-end</p>
        </div>
        <div className="about-project__progress-line-right">
          <div className="about-project__progress-element">4 недели</div>
          <p className="about-project__progress-paragraph">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
