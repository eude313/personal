import React from "react";
import {
  AboutContainer,
  AboutWrapper,
  AboutContent,
  AboutColumn1,
  AboutColumn2,
  AboutButton,
} from "./AboutStyle";
import "./About.css";
import { MdDownloadForOffline } from "react-icons/md";

const AboutCont = {
  text1: {
    fontFamily: "'Alfa Slab One', cursive",
    fontSize: "70px",
    letterSpacing: "3px",
    color: "#202020",
    opacity: " 0.9",
    textShadow: "0 0 3px black",
  },
  text2: {
    zIndex: "1",
    fontFamily: "'Carter One', cursive",
    letterSpacing: "3px",
    fontSize: "50px",
    textShadow: "0 0 3px #feb300",
    position: "absolute",
  },
  icon: {
    paddingLeft: "18px",
    fontSize: "47px",
    color: "#feb300",
    position: "relative",
    bottom: "-17.3px",
    right: "-4px",
  },
};

export default function About() {
  return (
    <>
      <AboutContainer>
        <AboutWrapper>
          <h1 style={AboutCont.text1}>READ ME</h1>
          <h1 style={AboutCont.text2}>
            ABOUT <span className='text3'>ME</span>
          </h1>
        </AboutWrapper>
        <AboutContent>
          <AboutColumn1>
            <div className='col'>
              <div>
                <h3>
                  <span className='text'>First Name:</span> Eudes
                </h3>
                <h3>
                  <span className='text'>Age:</span> 23
                </h3>
                <h3>
                  <span className='text'>Freelance:</span> Available
                </h3>
                <h3>
                  <span className='text'>Phone:</span> +25323731295
                </h3>
                <h3>
                  <span className='text'>github:</span> Eude313@github.com
                </h3>
              </div>
              <div>
                <h3>
                  <span className='text'>Last Name:</span> Charles
                </h3>
                <h3>
                  <span className='text'>Nationality:</span> Kenyan
                </h3>
                <h3>
                  <span className='text'>Address:</span> Nairobi, Kenya
                </h3>
                <h3>
                  <span className='text'>Languages:</span> English, Kiswahili
                </h3>
                <h3>
                  <span className='text'>Email:</span> Charleseudes9@gmail.com
                </h3>
              </div>
            </div>
            <div className='aboutbtn'>
              <AboutButton to=''>
                Download Cv
                <MdDownloadForOffline style={AboutCont.icon} />
              </AboutButton>
            </div>
          </AboutColumn1>
          <AboutColumn2></AboutColumn2>
        </AboutContent>
      </AboutContainer>
    </>
  );
}
