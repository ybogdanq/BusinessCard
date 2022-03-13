import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SocialsButtonsList from "../components/SocialsButtonsList";
import "./Home.css";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [animateName, setAnimateName] = useState(false);

  useEffect(() => {
    navigate("/BusinessCard");
    setAnimateName(true);
    setTimeout(() => {
      setAnimateName(false);
    }, 1000);
  }, []);
  return (
    <div className="wrapper">
      <h1 className={`developer__name ${animateName ? "animate" : ""}`}>
        BOHDAN <br /> YERESHCHENKO
      </h1>
      <h4 className="subtext">Code & Things in Between</h4>
      <SocialsButtonsList />
    </div>
  );
};

export default Home;
