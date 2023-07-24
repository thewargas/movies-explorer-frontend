import "./Techs.css";
import React from "react";

function Techs() {
  return (
    <section className="section techs" id="Techs">
      <h2 className="section-title">Технологии</h2>
      <hr className="section-underline"></hr>
      <div className="techs__container">
        <h3 className="techs__subtitle">7 технологий</h3>
        <p className="techs__paragraph">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className="techs__list">
          <li className="techs__element">HTML</li>
          <li className="techs__element">CSS</li>
          <li className="techs__element">JS</li>
          <li className="techs__element">React</li>
          <li className="techs__element">Git</li>
          <li className="techs__element">Express.js</li>
          <li className="techs__element">mongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;
