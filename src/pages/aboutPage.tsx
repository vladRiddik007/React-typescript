import React from "react";
import { useHistory } from "react-router-dom";

export const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1>Страница информации</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam cupiditate
        tempora dolor optio expedita mollitia magni quasi libero eligendi ullam
        obcaecati, necessitatibus possimus fuga accusantium sapiente ad. Animi,
        culpa et?
      </p>
      <button className="btn" onClick={() => history.push("/")}>
        обратно к списку дел
      </button>
    </>
  );
};
