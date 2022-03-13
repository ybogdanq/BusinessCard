import React from "react";
import { RouteNames } from "../router/types";
import { Link } from "react-router-dom";
import cl from "../styles/SocialsButtonList.module.css";

const SocialsButtonsList: React.FC = () => {
  return (
    <ul className={cl.link__list}>
      <li className={cl.link}>
        <a href="https://www.linkedin.com/in/ybogdanq/">LinkedIn</a>
      </li>
      <li className={cl.link}>
        <a href="https://github.com/ybogdanq">Github</a>
      </li>
      <li className={cl.link}>
        <a href="https://www.instagram.com/ybogdanq/">Instagram</a>
      </li>
      <li className={cl.link}>
        <a href="https://t.me/ybogdanq">Telegram</a>
      </li>
      <li className={cl.link}>
        <Link to={RouteNames.Resume}>My Résumé</Link>
      </li>
    </ul>
  );
};

export default SocialsButtonsList;
