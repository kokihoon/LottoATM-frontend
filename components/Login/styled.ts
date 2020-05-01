import styled from "styled-components";

interface InputPropsType {
  error?: String;
}

export const LoginNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const LoginForm = styled.div`
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  height: auto;
  min-height: 500px;
  padding: 48px 40px 36px;
  display: flex;
  flex-direction: column;
  width: auto;
  min-width: 400px;
`;

export const Logo = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export const LoginTitle = styled.div`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 40px;
`;

export const EmailWrap = styled.div`
  padding-bottom: 24px;
  color: #767676;
  text-align: left;
`;

export const EmailInput = styled.input<InputPropsType>`
  width: 100%;
  height: 50px;
  margin-top: 10px;
  padding-right: 15px;
  padding-left: 15px;
  border-radius: 5px;
  border: 1px solid #e1e2e3;
  font-size: 15px;
  color: #333;
  border-color: ${(props: InputPropsType) => (props.error ? "red" : "")};
`;

export const PasswordWrap = styled.div`
  padding-bottom: 24px;
  color: #767676;
  text-align: left;
`;

export const PasswordInput = styled.input<InputPropsType>`
  width: 100%;
  height: 50px;
  margin-top: 10px;
  padding-right: 15px;
  padding-left: 15px;
  border-radius: 5px;
  border: 1px solid #e1e2e3;
  font-size: 15px;
  color: #333;
  border-color: ${(props: InputPropsType) => (props.error ? "red" : "")};
`;

export const LoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  border: 0px solid;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
`;
