import React from "react";
import { NavLayout, LayoutLogo, Login, MenuModal } from "./styled";

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
      <MenuModal>1</MenuModal>
      {children}
    </>
  );
};

export default AppLayout;
