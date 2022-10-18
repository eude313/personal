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
import { Fade } from "react-reveal";
import Jump from "react-reveal/Jump";
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
    fontSize: "43px",
    color: "#feb300",
    position: "relative",
    bottom: "-16px",
    right: "-0.89px",
  },
};

export default function Main() {
  return (
    <>
      <MainContainer>
        <MainWrapper>
          <MainContent>
            <MainBg1></MainBg1>
            <Fade left>
              <MainBg>
                <img
                  src={process.env.PUBLIC_URL + "./Media/eudes.png"}
                  style={styles.image}
                  alt='charles eudes'
                />
              </MainBg>
            </Fade>
          </MainContent>

          <MainText>
            <Fade
              right
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
                <Jump>
                  <MainButton to=''>
                    more about me
                    <BsFillArrowRightCircleFill style={styles.icon} />
                  </MainButton>
                </Jump>
              </div>
            </Fade>
          </MainText>
        </MainWrapper>
      </MainContainer>
    </>
  );
}
