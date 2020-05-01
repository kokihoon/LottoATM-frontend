import React, { useState } from "react";
import {
  LoginNav,
  LoginForm,
  Logo,
  LoginTitle,
  EmailWrap,
  EmailInput,
  PasswordWrap,
  PasswordInput,
  LoginButton
} from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBillWave,
  faDollarSign
} from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [email, setEamil] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmail = (e: React.FormEvent<HTMLInputElement>): void => {
    setEamil(e.currentTarget.value);
    setEmailError("");
  };

  const handlePassoword = (e: React.FormEvent<HTMLInputElement>): void => {
    setPassword(e.currentTarget.value);
    setPasswordError("");
  };

  const enterPasswordCheck = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      //onEmailLogin();
    }
  };

  const onLogin = () => {
    const params = {
      email,
      password
    };
    console.log(email, password);
  };

  return (
    <LoginNav>
      <LoginForm>
        <Logo>
          <FontAwesomeIcon icon={faMoneyBillWave} />
          LottoATM
          <FontAwesomeIcon icon={faDollarSign} />
        </Logo>
        <LoginTitle>로그인</LoginTitle>
        <EmailWrap>
          <EmailInput
            type="email"
            name="email"
            id="email"
            error={emailError}
            autoFocus={true}
            placeholder="이메일"
            onChange={handleEmail}
          />
          <div style={{ textAlign: "left", color: "red", fontSize: "12px" }}>
            {emailError}
          </div>
        </EmailWrap>

        <PasswordWrap>
          <PasswordInput
            type="password"
            name="password"
            error={passwordError}
            placeholder="비밀번호"
            onChange={handlePassoword}
            onKeyPress={enterPasswordCheck}
          />
          <div style={{ textAlign: "left", color: "red", fontSize: "12px" }}>
            {passwordError}
          </div>
        </PasswordWrap>
        <LoginButton onClick={onLogin}>로그인</LoginButton>
      </LoginForm>
    </LoginNav>
  );
};

export default Login;
