import React from "react";
import {
  MainBg,
  MainBg1,
  MainContent,
  MainContainer,
  MainWrapper,
  MainText,
  MainButton,
} from "./MainStyle";
import "./Main.css";
import { Fade, Flip } from "react-reveal";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { MdOutlineWavingHand } from "react-icons/md";

const styles = {
  image: {
    borderRadius: "30px",
  },
  h1: {
    color: "#feb300",
    fontFamily: "'Carter One', cursive",
    letterSpacing: "1px",
  },
  icon: {
    paddingLeft: "18px",
    fontSize: "41px",
    color: "#feb300",
    position: "relative",
    bottom: "-15px",
    right: "-1px",
  },
};

export default function Main() {
  const id = "/";
  return (
    <>
      <MainContainer id={id}>
        <MainWrapper>
          <MainContent>
            <MainBg1></MainBg1>
            <Flip left>
              <MainBg>
                <img
                  src={process.env.PUBLIC_URL + "./Media/eudes.png"}
                  style={styles.image}
                  className='responsive'
                  alt='charles eudes'
                />
              </MainBg>
            </Flip>
          </MainContent>

          <MainText>
            <Fade
              top
              cascade>
              <div>
                <h1 style={styles.h1}>
                  — HELLO <MdOutlineWavingHand /> I'M CHARLES EUDES.
                </h1>
                <h1 style={styles.h1}>WEB DESIGNER</h1>
                <p>
                  I'm a kenyan based full stack software developer focused on
                  crating clean and user friendly expirences, I am passionate
                  about bulding excellent software that improves the lives of
                  those around me
                </p>

                <div className='mainbtn'>
                  <MainButton to='about'>
                    more about me
                    <BsFillArrowRightCircleFill style={styles.icon} />
                  </MainButton>
                </div>
              </div>
            </Fade>
          </MainText>
        </MainWrapper>
      </MainContainer>
    </>
  );
}
