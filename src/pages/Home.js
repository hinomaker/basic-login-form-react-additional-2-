import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import "./Home.css";

const Home = () => {
  const { mainUserName } = useContext(UserContext);
  const navigate = useNavigate();
  const navigateToSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className="home__container">
      <a href="/">
        <h2 className="home__container__title">Basic react page</h2>
      </a>
      {mainUserName !== "" && (
        <div className="home__container__user-name">
          안녕하세요, {mainUserName}님
        </div>
      )}
      <div className="home__container__btn-group">
        <button className="home__container__btn-group__signin">Sign in</button>
        <button
          className="home__container__btn-group__signup"
          onClick={navigateToSignUp}
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Home;
