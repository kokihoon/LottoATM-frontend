import React, { useState, useEffect } from "react";
import {
  SignUpNav,
  SignUpForm,
  Logo,
  SignUpTitle,
  InputWrap,
  Input,
  SignUpButton
} from "./styled";
import { IRootState } from "../../store/index";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBillWave,
  faDollarSign
} from "@fortawesome/free-solid-svg-icons";
import { signUpActions } from "../../action/auth";

const SignUp = () => {
  const [email, setEamil] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordCheckError, setPasswordCheckError] = useState("");

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const dispatch = useDispatch();
  const { error, authStatus } = useSelector(
    (state: IRootState) => state.auth.signup
  );
  const handleEmail = (e: React.FormEvent<HTMLInputElement>): void => {
    setEamil(e.currentTarget.value);
    setEmailError("");
  };

  const handlePassoword = (e: React.FormEvent<HTMLInputElement>): void => {
    setPassword(e.currentTarget.value);
    setPasswordError("");
  };

  const handlePassowordCheck = (e: React.FormEvent<HTMLInputElement>): void => {
    setPasswordCheck(e.currentTarget.value);
    setPasswordCheckError("");
  };

  const handleName = (e: React.FormEvent<HTMLInputElement>): void => {
    setName(e.currentTarget.value);
    setNameError("");
  };

  const enterSignUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSignUp();
    }
  };

  const onSignUp = async () => {
    const params = {
      email,
      password,
      username: name
    };
    const emailRule = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (emailRule.test(email)) {
      await dispatch(signUpActions.signUpRequest(params));
    } else {
      setEmailError("올바른 이메일 형식을 입력해주세요.");
    }
  };

  useEffect(() => {
    if (authStatus == "SUCCESS") {
      document.location.href = "/";
    }
  }, [error, authStatus]);

  return (
    <SignUpNav>
      <SignUpForm>
        <Logo>
          <FontAwesomeIcon icon={faMoneyBillWave} />
          LottoATM
          <FontAwesomeIcon icon={faDollarSign} />
        </Logo>
        <SignUpTitle>회원가입</SignUpTitle>
        <InputWrap>
          <label htmlFor="email">이메일</label>
          <Input
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
        </InputWrap>
        <InputWrap>
          <label htmlFor="password">비밀번호</label>
          <Input
            type="password"
            name="password"
            id="password"
            error={passwordError}
            placeholder="비밀번호"
            onChange={handlePassoword}
          />
          <div style={{ textAlign: "left", color: "red", fontSize: "12px" }}>
            {passwordError}
          </div>
        </InputWrap>

        <InputWrap>
          <label htmlFor="passwordCheck">비밀번호확인</label>
          <Input
            type="password"
            name="passwordCheck"
            id="passwordCheck"
            error={passwordCheckError}
            placeholder="비밀번호확인"
            onChange={handlePassowordCheck}
          />
          <div style={{ textAlign: "left", color: "red", fontSize: "12px" }}>
            {passwordCheckError}
          </div>
        </InputWrap>
        <InputWrap>
          <label htmlFor="name">이름</label>
          <Input
            type="text"
            name="name"
            id="name"
            error={nameError}
            placeholder="이름"
            onChange={handleName}
            onKeyPress={enterSignUp}
          />
          <div style={{ textAlign: "left", color: "red", fontSize: "12px" }}>
            {nameError}
          </div>
        </InputWrap>
        <SignUpButton onClick={onSignUp}>회원가입</SignUpButton>
      </SignUpForm>
    </SignUpNav>
  );
};

export default SignUp;
