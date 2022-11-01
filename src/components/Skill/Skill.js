import React from "react";
import {
  SkillContainer,
  SkillWrapper,
  SkillTop,
  SkillBottom,
} from "./SkillStyle";
import "./Skill.css";
import { Fade } from "react-reveal";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";

export default function Skill() {
  const id = "skills";
  return (
    <>
      <SkillContainer id={id}>
        <SkillWrapper>
          <SkillTop>
            <h1 className='text1'>ARCHIVES</h1>
            <h1 className='text2'>
              MY <span className='text3'>SKILLS</span>
            </h1>
          </SkillTop>
          <SkillBottom className='di1'>
            <Fade
              top
              cascade>
              <div>
                <div className='eos'>
                  <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={73}
                    duration={1.4}
                    easingFunction={easeQuadInOut}
                    noRepeat>
                    {(value) => {
                      const roundedValue = Math.round(value);
                      return (
                        <CircularProgressbar
                          value={value}
                          text={`${roundedValue}%`}
                          strokeWidth={5}
                          styles={buildStyles({
                            pathTransition: "none",
                            textColor: "white",
                            textShadow: "0 0 3px black",
                            pathColor: "#feb300",
                            trailColor: "black",
                          })}
                        />
                      );
                    }}
                  </AnimatedProgressProvider>
                  <h2>HTML</h2>
                </div>
              </div>
              <div>
                <div className='eos'>
                  <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={78}
                    duration={1.4}
                    easingFunction={easeQuadInOut}
                    noRepeat>
                    {(value) => {
                      const roundedValue = Math.round(value);
                      return (
                        <CircularProgressbar
                          value={value}
                          text={`${roundedValue}%`}
                          strokeWidth={5}
                          styles={buildStyles({
                            pathTransition: "none",
                            textColor: "white",
                            textShadow: "0 0 3px black",
                            pathColor: "#feb300",
                            trailColor: "black",
                          })}
                        />
                      );
                    }}
                  </AnimatedProgressProvider>
                  <h2>CSS 3</h2>
                </div>
              </div>
              <div>
                <div className='eos'>
                  <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={70}
                    duration={1.4}
                    easingFunction={easeQuadInOut}
                    noRepeat>
                    {(value) => {
                      const roundedValue = Math.round(value);
                      return (
                        <CircularProgressbar
                          value={value}
                          text={`${roundedValue}%`}
                          strokeWidth={5}
                          styles={buildStyles({
                            pathTransition: "none",
                            textColor: "white",
                            textShadow: "0 0 3px black",
                            pathColor: "#feb300",
                            trailColor: "black",
                          })}
                        />
                      );
                    }}
                  </AnimatedProgressProvider>
                  <h2>Javascript</h2>
                </div>
              </div>
              <div>
                <div className='eos'>
                  <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={72}
                    duration={1.4}
                    easingFunction={easeQuadInOut}
                    noRepeat>
                    {(value) => {
                      const roundedValue = Math.round(value);
                      return (
                        <CircularProgressbar
                          value={value}
                          text={`${roundedValue}%`}
                          strokeWidth={5}
                          styles={buildStyles({
                            pathTransition: "none",
                            textColor: "white",
                            textShadow: "0 0 3px black",
                            pathColor: "#feb300",
                            trailColor: "black",
                          })}
                        />
                      );
                    }}
                  </AnimatedProgressProvider>
                  <h2>REACT</h2>
                </div>
              </div>
              <div>
                <div className='eos'>
                  <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={72}
                    duration={1.4}
                    easingFunction={easeQuadInOut}
                    noRepeat>
                    {(value) => {
                      const roundedValue = Math.round(value);
                      return (
                        <CircularProgressbar
                          value={value}
                          text={`${roundedValue}%`}
                          strokeWidth={5}
                          styles={buildStyles({
                            pathTransition: "none",
                            textColor: "white",
                            textShadow: "0 0 3px black",
                            pathColor: "#feb300",
                            trailColor: "black",
                          })}
                        />
                      );
                    }}
                  </AnimatedProgressProvider>
                  <h2>DJANGO</h2>
                </div>
              </div>
              <div>
                <div className='eos'>
                  <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={75}
                    duration={1.4}
                    easingFunction={easeQuadInOut}
                    noRepeat>
                    {(value) => {
                      const roundedValue = Math.round(value);
                      return (
                        <CircularProgressbar
                          value={value}
                          text={`${roundedValue}%`}
                          strokeWidth={5}
                          styles={buildStyles({
                            pathTransition: "none",
                            textColor: "white",
                            textShadow: "0 0 3px black",
                            pathColor: "#feb300",
                            trailColor: "black",
                          })}
                        />
                      );
                    }}
                  </AnimatedProgressProvider>
                  <h2>PYTHON</h2>
                </div>
              </div>
              <div>
                <div className='eos'>
                  <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={69}
                    duration={1.4}
                    easingFunction={easeQuadInOut}
                    noRepeat>
                    {(value) => {
                      const roundedValue = Math.round(value);
                      return (
                        <CircularProgressbar
                          value={value}
                          text={`${roundedValue}%`}
                          strokeWidth={5}
                          styles={buildStyles({
                            pathTransition: "none",
                            textColor: "white",
                            textShadow: "0 0 3px black",
                            pathColor: "#feb300",
                            trailColor: "black",
                          })}
                        />
                      );
                    }}
                  </AnimatedProgressProvider>
                  <h2>ANGULAR</h2>
                </div>
              </div>
              <div>
                <div className='eos'>
                  <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={78}
                    duration={1.4}
                    easingFunction={easeQuadInOut}
                    noRepeat>
                    {(value) => {
                      const roundedValue = Math.round(value);
                      return (
                        <CircularProgressbar
                          value={value}
                          text={`${roundedValue}%`}
                          strokeWidth={5}
                          styles={buildStyles({
                            pathTransition: "none",
                            textColor: "white",
                            textShadow: "0 0 3px black",
                            pathColor: "#feb300",
                            trailColor: "black",
                          })}
                        />
                      );
                    }}
                  </AnimatedProgressProvider>
                  <h2>POSTGRESS</h2>
                </div>
              </div>
            </Fade>
          </SkillBottom>
        </SkillWrapper>
      </SkillContainer>
    </>
  );
}
