import React from "react";
import {
  AboutContainer,
  AboutWrapper,
  AboutContent,
  AboutColumn1,
  AboutColumn2,
  AboutButton,
  Card,
} from "./AboutStyle";
import "./About.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Fade } from "react-reveal";

const AboutCont = {
  icons: {
    paddingLeft: "18px",
    fontSize: "41px",
    color: "#feb300",
    position: "relative",
    top: "15px",
    right: "-1px",
  },
};

export default function About() {
  const id = "about";
  return (
    <>
      <AboutContainer id={id}>
        <AboutWrapper>
          <h1 className='textW'>READ ME</h1>
          <h1 className='textY'>
            ABOUT <span className='textR'>ME</span>
          </h1>
        </AboutWrapper>
        <AboutContent>
          <AboutColumn1>
            <div className='col'>
              <Fade
                cascade
                left>
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
              </Fade>
              <Fade
                cascade
                left>
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
              </Fade>
            </div>
            <div className='aboutbtn'>
              <Fade left>
                <AboutButton href='https://drive.google.com/file/d/1QF7ObxDj5fsE6MPz1-qVWgxKDfEJh-ok/view?usp=sharing'>
                  View Resume
                  <BsFillArrowRightCircleFill style={AboutCont.icons} />
                </AboutButton>
              </Fade>
            </div>
          </AboutColumn1>
          <AboutColumn2>
            <Fade
              top
              cascade>
              <div className='card'>
                <Card>
                  <h1>1+</h1>
                  <h3>— YEARS OF EXPERIENCE</h3>
                </Card>
                <Card>
                  <h1>10+</h1>
                  <h3>— COMPLETED PROJECTS</h3>
                </Card>
              </div>
            </Fade>
            <Fade
              top
              cascade>
              <div className='card'>
                <Card>
                  <h1>10+</h1>
                  <h3>— HAPPY CUSTOMERS</h3>
                </Card>
                <Card>
                  <h1>2+</h1>
                  <h3>— CERTIFICATIONS</h3>
                </Card>
              </div>
            </Fade>
          </AboutColumn2>
        </AboutContent>
      </AboutContainer>
    </>
  );
}
