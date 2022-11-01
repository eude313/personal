import styled from "styled-components";

export const FooterContainer = styled.footer`
  height: 250px;
  margin-top: 50px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FooterWrapper = styled.footer`
  height: 250px;
`;

export const FooterCont1 = styled.footer`
  height: 160px;
  color: #feb300;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #262626;
  background: linear-gradient(to bottom, rgba(255, 0, 0, 0), #262626);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FooterCont2 = styled.footer`
  height: 90px;
  color: white;
  background: linear-gradient(to bottom, #262626, black);
  background-color: black;
  display: flex;
  justify-content: center;
  font-family: "Carter One", cursive;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    font-size: 2vw;
  }
`;
