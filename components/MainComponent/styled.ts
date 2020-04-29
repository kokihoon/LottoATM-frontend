import styled from "styled-components";

interface colorProps {
  color?: string;
}

export const MainLayout = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const MainHeader = styled.div`
  color: #d43301;
  font-size: 3rem;
  margin-top: 6%;
`;

export const SubMainHeader = styled.div`
  color: #707070;
`;

export const BallNav = styled.div`
  display: flex;
  margin-top: 3%;
`;

export const GeneralNumberNav = styled.div`
  background-color: #f0f8ff;
  display: flex;
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  border-radius: 15px;
`;

export const NumberBall = styled.div<colorProps>`
  display: flex;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: ${props => props.color};
  box-shadow: inset -25px -15px 40px rgba(0, 0, 0, 0.3);
  background-image: linear-gradient(
    -45deg,
    rgba(255, 255, 220, 0.3) 0%,
    transparent 100%
  );
  margin: 20px;
`;
export const Number = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 3rem;
  color: #fff;
`;

export const PlusNav = styled.div`
  display: flex;
  margin: 15px;
  justify-content: center;
  align-items: center;
`;
