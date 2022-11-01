import styled from "styled-components";
import { Link } from "react-scroll";

export const MainContainer = styled.div`
  height: 700px;
  width: 100%;

  @media screen and (max-width: 960px) {
    height: auto;
    width: auto;
  }
`;

export const MainWrapper = styled.div`
  height: 700px;
  width: 100%;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    height: auto;
    width: auto;
  }
`;

export const MainContent = styled.div`
  width: 50%;
  height: 100%;
  @media screen and (max-width: 960px) {
    width: auto;
    height: 700px;
  }
`;

export const MainBg1 = styled.div`
  width: 320px;
  height: 700px;
  background: #feb300;
  position: absolute;
  left: 0;

  @media screen and (max-width: 960px) {
    width: 50%;
  }
`;

export const MainBg = styled.div`
  position: absolute;
  top: 3rem;
  left: 3rem;
  border-radius: 30px;
  background: black;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.9), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  @media screen and (max-width: 960px) {
    left: 25%;
  }
  @media screen and (max-width: 600px) {
    left: 5%;
    margin-right: 20px;
  }
`;

export const MainText = styled.div`
  width: 50%;
  font-size: 1rem;
  color: white;
  padding: 0px 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 1px;
  font-family: "Courgette", cursive;
  @media screen and (max-width: 960px) {
    width: auto;
    text-align: center;
    margin: 30px 0px;
    font-size: medium;
  }
`;

export const MainButton = styled(Link)`
  font-size: 1rem;
  color: #fff;
  width: auto;
  border-radius: 30px;
  border: 1px solid #feb300;
  text-transform: uppercase;
  padding: 7px 0px;
  padding-left: 16px;
  font-family: "Carter One", cursive;
  margin: 0px;

  &:hover {
    border: none;
    color: #feb300;
  }
`;
