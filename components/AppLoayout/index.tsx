import React, { useState } from "react";
import Link from "next/link";
import { NavLayout, LayoutLogo, Login, MenuNav, Menu } from "./styled";
import MenuModal from "../MenuModal/index";
import {
  faGripHorizontal,
  faMoneyBillWave,
  faDollarSign
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { IRootState } from "../../store/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  children: React.ReactNode;
}

const AppLayout: React.FunctionComponent<Props> = ({ children }: Props) => {
  const [openModal, setOpenModal] = useState(false);

  const { isLoggedIn } = useSelector((state: IRootState) => state.auth.user);

  const handleModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <>
      <NavLayout>
        <LayoutLogo>
          <FontAwesomeIcon icon={faMoneyBillWave} />
          LottoATM
          <FontAwesomeIcon icon={faDollarSign} />
        </LayoutLogo>
        <MenuNav>
          <Menu onClick={handleModal}>
            <FontAwesomeIcon icon={faGripHorizontal} />
          </Menu>
          {isLoggedIn ? (
            <Login>회원님</Login>
          ) : (
            <>
              <Login>
                <Link href="accounts">로그인</Link>
              </Login>
              <Login>
                <Link href="signup">회원가입</Link>
              </Login>
            </>
          )}
        </MenuNav>
      </NavLayout>
      {openModal ? <MenuModal>1</MenuModal> : ""}

      {children}
    </>
  );
};

export default AppLayout;
