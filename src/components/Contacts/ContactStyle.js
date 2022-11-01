import styled from "styled-components";

export const ContactContainer = styled.div`
  height: auto;
  padding: 0px 5px;
  width: auto;
  @media (max-width: 768px) {
    height: auto;
    // width: 100%;
  }
`;

export const ContactWrapper = styled.div`
  height: auto;
  display: flex;
  width: 100%;
  padding: 10px auto;
  margin-bottom: 26px;
  justify-content: center;
  align-items: center;
  @media (max-width: "768px") {
    padding: 0px 4px;
  }
`;
export const ContactCont = styled.div`
  height: 520px;
  margin: 0px;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 0px;
  }
`;
export const ContactCol1 = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 0px;
  }
`;
export const ContactCol2 = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;
