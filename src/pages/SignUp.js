import React, { useState, useEffect, useCallback } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SignUpForm } from "../components";
import { UserContext } from "../App";
import "./SignUp.css";

const SignUp = () => {
  const { setMainUserName } = useContext(UserContext);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userRePassword, setUserRePassword] = useState("");
  const [comparePassword, setComparePassword] = useState(false);
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const navigate = useNavigate();

  // const submitFunction = useCallback(e => {
  //   e.preventDefault();
  //   setMainUserName(userName);
  //   console.log(
  //     `이메일 : ${userEmail}  / 비밀번호 : ${userPassword} / 비밀번호 확인 : ${userRePassword} / 이름 : ${userName} / 나이 : ${userAge}`
  //   );
  //   navigate("/");
  // }, []);

  const submitFunction = e => {
    e.preventDefault();
    setMainUserName(userName);
    navigate("/");
  };

  const btnDisabledHandler = () => {
    // return true or false
    if (
      userEmail !== "" &&
      userPassword !== "" &&
      userRePassword !== "" &&
      userName !== "" &&
      comparePassword
    ) {
      return false;
    }
    return true;
  };

  const btnResetHandler = () => {
    setUserEmail("");
    setUserPassword("");
    setUserRePassword("");
    setUserName("");
    setUserAge("");
    setComparePassword(false);
  };

  useEffect(() => {
    if (userPassword === userRePassword) {
      setComparePassword(true);
    } else {
      setComparePassword(false);
    }
  }, [userPassword, userRePassword]);

  return (
    <div className="login__info">
      <a href="/">
        <h1>Basic react page</h1>
      </a>
      <form onSubmit={submitFunction} className="login__form">
        <SignUpForm
          inputLabel="email"
          labelName="이메일"
          inputType="email"
          placeholderText="이메일을 입력하세요"
          requiredCondition={true}
          onChangeHandler={e => setUserEmail(e.target.value)}
          value={userEmail}
        />
        <SignUpForm
          inputLabel="password"
          labelName="비밀번호"
          inputType="password"
          placeholderText="비밀번호를 입력하세요"
          requiredCondition={true}
          onChangeHandler={e => setUserPassword(e.target.value)}
          value={userPassword}
        />
        <div className="repassword__container">
          <SignUpForm
            inputLabel="passwordRepeat"
            labelName="비밀번호 재확인"
            inputType="password"
            placeholderText="비밀번호를 다시 입력하세요"
            requiredCondition={true}
            onChangeHandler={e => setUserRePassword(e.target.value)}
            value={userRePassword}
          />
          {userRePassword !== "" &&
            (comparePassword ? (
              <div className="password__query" style={{ color: "blue" }}>
                비밀번호가 일치합니다.
              </div>
            ) : (
              <div className="password__query" style={{ color: "red" }}>
                비밀번호가 일치하지 않습니다.
              </div>
            ))}
        </div>
        <SignUpForm
          inputLabel="name"
          labelName="이름"
          inputType="text"
          placeholderText="이름을 입력하세요"
          requiredCondition={true}
          onChangeHandler={e => setUserName(e.target.value)}
          value={userName}
        />
        <SignUpForm
          inputLabel="age"
          labelName="나이"
          inputType="number"
          placeholderText="나이를 입력하세요"
          requiredCondition={false}
          onChangeHandler={e => setUserAge(e.target.value)}
          value={userAge}
        />
        <button
          className="btn-submit"
          type="submit"
          disabled={btnDisabledHandler()}
        >
          가입하기
        </button>
        <button className="btn-reset" type="button" onClick={btnResetHandler}>
          리셋
        </button>
      </form>
    </div>
  );
};

export default SignUp;
