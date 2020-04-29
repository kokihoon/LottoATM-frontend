import React from "react";
import {
  MainLayout,
  MainHeader,
  SubMainHeader,
  BallNav,
  NumberBall,
  Number,
  GeneralNumberNav,
  PlusNav
} from "./styled";

const MainComponent: React.FunctionComponent = () => {
  return (
    <>
      <MainLayout>
        <MainHeader>907회 당첨결과</MainHeader>
        <SubMainHeader>(2020년 04월 18일 추첨)</SubMainHeader>
        <BallNav>
          <GeneralNumberNav>
            <NumberBall color="#FF7272">
              <Number>21</Number>
            </NumberBall>
            <NumberBall color="#FF7272">
              <Number>27</Number>
            </NumberBall>
            <NumberBall color="#FF7272">
              <Number>29</Number>
            </NumberBall>
            <NumberBall color="#AAAAAA">
              <Number>38</Number>
            </NumberBall>
            <NumberBall color="#AAAAAA">
              <Number>40</Number>
            </NumberBall>
            <NumberBall color="#B0D840">
              <Number>44</Number>
            </NumberBall>
          </GeneralNumberNav>
          <PlusNav>
            <img
              src="/images/plus_sign.png"
              alt="my image"
              height="50px;"
              width="50px;"
            />
          </PlusNav>
          <GeneralNumberNav>
            <NumberBall color="#AAAAAA">
              <Number>37</Number>
            </NumberBall>
          </GeneralNumberNav>
        </BallNav>
      </MainLayout>
    </>
  );
};

export default MainComponent;
