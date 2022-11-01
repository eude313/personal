import styled from "styled-components";

export const AboutContainer = styled.div`
  height: 600px;
  @media screen and (max-width: 960px) {
    height: auto;
  }
  }
`;

export const AboutWrapper = styled.div`
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    height: auto;
  }
`;

export const AboutContent = styled.div`
  width: 100%;
  height: 420px;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 960px) {
    height: auto;
    flex-direction: column;
  }
`;

export const AboutColumn1 = styled.div`
  width: 50%;
  font-size: 17px;
  color: #fff;
  padding-top: 20px;
  font-family: "Courgette", cursive;

  @media screen and (max-width: 960px) {
    width: 100%;
    height: auto;
  }
`;

export const AboutButton = styled.a`
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

export const AboutColumn2 = styled.div`
  width: 50%;
  @media screen and (max-width: 960px) {
    width: 100%;
    height: auto;
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

export const Card = styled.div`
  width: 50%;
  height: 90%;
  margin: 10px;
  border: 1px solid #202030;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.9), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
