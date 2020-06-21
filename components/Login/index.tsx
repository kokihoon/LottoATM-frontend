import React, { useState, useEffect } from "react";
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
import { IRootState } from "../../store/index";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBillWave,
  faDollarSign
} from "@fortawesome/free-solid-svg-icons";
import { loginActions } from "../../action/auth";

const Login = () => {
  const [email, setEamil] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const dispatch = useDispatch();
  const { error, authStatus } = useSelector(
    (state: IRootState) => state.auth.login
  );
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
      onLogin();
    }
  };

  const onLogin = async () => {
    const params = {
      username: email,
      password
    };
    const emailRule = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (emailRule.test(email)) {
      await dispatch(loginActions.loginRequest(params));
    } else {
      setEmailError("올바른 이메일 형식을 입력해주세요.");
    }
  };

  useEffect(() => {
    if (error == "passwordError") {
      setPasswordError("비밀번호가 틀립니다.");
    }

    if (authStatus == "SUCCESS") {
      document.location.href = "/";
    }
  }, [error, authStatus]);

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
