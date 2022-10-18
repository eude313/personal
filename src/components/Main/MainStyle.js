import styled from "styled-components";

export const MainContainer = styled.div`
  height: 700px;
  width: 100%;
`;

export const MainWrapper = styled.div`
  height: 700px;
  display: flex;
`;

export const MainContent = styled.div`
  width: 50%;
  height: 100%;
`;

export const MainBg1 = styled.div`
  width: 320px;
  height: 99%;
  background: #feb300;
  position: absolute;
  bottom: -12rem;
  left: 0;
`;

export const MainBg = styled.div`
  // z-index: 1;
  position: absolute;
  bottom: -41rem;
  left: 3rem;
  // overflow: hidden;
  border-radius: 30px;
  background: black;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.9), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const MainText = styled.text`
  width: 50%;
  font-size: 1rem;
  color: white;
  padding: 0px 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 1px;
  font-family: "Courgette", cursive;
`;

export const MainButton = styled.text`
  font-size: 1rem;
  color: #fff;
  border-radius: 30px;
  border: 1px solid #feb300;
  text-transform: uppercase;
  padding: 7px 0px;
  padding-left: 16px;
  font-family: "Carter One", cursive;

  &:hover {
    border: none;
    color: #feb300;
  }
`;
