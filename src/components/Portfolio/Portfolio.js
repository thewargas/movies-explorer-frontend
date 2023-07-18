import "./Portfolio.css";
import React from "react";

function Portfolio() {
  return (
    <div className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="porfolio__element">
          <a
            href="https://github.com/thewargas/how-to-learn"
            className="portfolio__link"
            target="_blank"
            rel="noreferrer"
          >
            Статичный сайт <span className="portfolion__icon">↗</span>
          </a>
        </li>
        <li className="porfolio__element">
          <a
            href="https://github.com/thewargas/russian-travel"
            className="portfolio__link"
            target="_blank"
            rel="noreferrer"
          >
            Адаптивный сайт <span className="portfolion__icon">↗</span>
          </a>
        </li>
        <li className="porfolio__element">
          <a
            href="https://github.com/thewargas/react-mesto-api-full-gha"
            className="portfolio__link"
            target="_blank"
            rel="noreferrer"
          >
            Одностраничное приложение
            <span className="portfolion__icon">↗</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
