import React, { useState } from "react";
import styled from "styled-components";
import "./Back.css";
import { TbArrowBigUpLines } from "react-icons/tb";
import Slide from "react-reveal/Zoom";

const BackContainer = styled.div`
  width: 50px;
  height: 70px;
  border-radius: 50px 50px 0px 0px;
  position: fixed;
  left: 95%;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(255, 0, 0, 0), #262626);
  color: #feb300;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    border-bottom: none;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.9), 0 6px 20px 0 #feb300;
    color: #fff;
  }
  @media screen and (max-width: 1024px) {
    position: fixed;
    left: 92%;
    bottom: 0;
  }
  @media screen and (max-width: 600px) {
    position: fixed;
    left: 89%;
    bottom: 0;
  }
`;

function Back() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      <BackContainer
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}>
        <Slide bottom>
          <div className='jda'>
            <TbArrowBigUpLines />
          </div>
        </Slide>
      </BackContainer>
    </>
  );
}

export default Back;
