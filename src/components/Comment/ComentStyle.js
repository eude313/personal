import styled from "styled-components";

export const CommentContainer = styled.div`
  height: auto;
  padding: 10px 10px;
`;

export const CommentWrapper = styled.div`
  height: auto;
  padding: 10px 10px;
  }
`;

export const CommentTop = styled.div`
  height: 120px;
  padding: 10px 10px;
  margin: 10px auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: "768px") {
    padding: 0px 4px;
  }
`;

export const CommentBottom = styled.div`
  height: auto;
  padding: 30px 10px;
  display: flex;
  justify-content: center;
  flex-direction: row;

  @media screen and (max-width: 690px) {
    width: auto;
    display: flex;
    flex-direction: column;
  }
`;
