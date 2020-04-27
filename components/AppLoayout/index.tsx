import React from "react";
import { NavLayout, LayoutLogo, Login } from "./styled";

interface Props {
  children: React.ReactNode;
}

const AppLayout: React.FunctionComponent<Props> = ({ children }: Props) => {
  return (
    <>
      <NavLayout>
        <LayoutLogo>LottoATM</LayoutLogo>
        <Login>로그인</Login>
      </NavLayout>
      {children}
    </>
  );
};

export default AppLayout;
