import React from "react";
import { Link } from "react-router-dom";
import cl from "../styles/ContactInfo.module.css";

const ContactInfo: React.FC = () => {
  return (
    <section className="resume-info__section contact-info">
      <ul className={cl.contact__list}>
        <li>
          <Link to="BusinessCard/home" className="styled__link">
            Profile
          </Link>
        </li>
        <li>
          <span>Ukraine, Zaporizhzhia</span>
        </li>
        <li>
          <a href="mailto:y.bogdan.work@gmail.com" className="styled__link">
            y.bogdan.work@gmail.com
          </a>
        </li>
      </ul>
    </section>
  );
};

export default ContactInfo;
