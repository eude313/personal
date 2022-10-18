import styled from "styled-components";

export const AboutContainer = styled.div`
  height: 600px;
`;

export const AboutWrapper = styled.div`
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AboutContent = styled.div`
  width: 100%;
  height: 420px;
  display: flex;
`;

export const AboutColumn1 = styled.div`
  width: 50%;
  font-size: 17px;
  color: #fff;
  padding-top: 20px;
  font-family: "Courgette", cursive;
`;

export const AboutButton = styled.text`
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

export const AboutColumn2 = styled.div`
  width: 50%;
  border: 3px solid yellow;
`;
