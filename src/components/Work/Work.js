import React from "react";
import {
  WorkContainer,
  WorkWrapper,
  WorkTop,
  WorkBottom,
} from "./WorkStyles.js";
import "./Work.css";
import { MdOutlineComputer } from "react-icons/md";
import { Fade } from "react-reveal";

function Work() {
  const id = "project";
  return (
    <WorkContainer id={id}>
      <WorkWrapper>
        <WorkTop>
          <h1 className='text1'>PORTFOLIO</h1>
          <h1 className='text2'>
            MY <span className='text3'>PROJECTS</span>
          </h1>
        </WorkTop>
        <WorkBottom>
          <Fade
            top
            cascade>
            <div className='poi'>
              <div>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "./Media/https-bazenga-webs-herokuapp-com.png"
                  }
                  className='responsive'
                  alt='goals'
                />
                <a href='https://bazenga-webs.herokuapp.com/'>
                  <div className='text-block'>
                    <p>Goals app</p>
                    <span>
                      <MdOutlineComputer />
                    </span>
                  </div>
                </a>
              </div>
              <div>
                <img
                  src={
                    process.env.PUBLIC_URL + "./Media/Creating-Awareness.png"
                  }
                  className='responsive'
                  alt='Creating-Awareness'
                />
                <a href='https://barrack-coder.github.io/Addresing-Period-Poverty/'>
                  <div className='text-block'>
                    <p>Creating-Awareness</p>
                    <span>
                      <MdOutlineComputer />
                    </span>
                  </div>
                </a>
              </div>
              <div>
                <img
                  src={process.env.PUBLIC_URL + "./Media/Fundi-Mtaani.png"}
                  className='responsive'
                  alt='Fundi-Mtaani'
                />
                <a href='https://romantic-mccarthy-59be0f.netlify.app/'>
                  <div className='text-block'>
                    <p>Fundi-Mtaani</p>
                    <span>
                      <MdOutlineComputer />
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </Fade>
          <Fade
            top
            cascade>
            <div className='poi'>
              <div>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "./Media/https-bazenga-apps-herokuapp-com.png"
                  }
                  className='responsive'
                  alt='https-bazenga-apps-herokuapp-com'
                />
                <a href='https://bazenga-apps.herokuapp.com/'>
                  <div className='text-block'>
                    <p>Pitches app</p>
                    <span>
                      <MdOutlineComputer />
                    </span>
                  </div>
                </a>
              </div>
              <div>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "./Media/https-newscarbonx-herokuapp-com.png"
                  }
                  className='responsive'
                  alt='newscarbonx'
                />
                <a href='https://newscarbonx.herokuapp.com/'>
                  <div className='text-block'>
                    <p>News app</p>

                    <span>
                      <MdOutlineComputer />
                    </span>
                  </div>
                </a>
              </div>
              <div>
                <img
                  src={process.env.PUBLIC_URL + "/Media/Quotes.png"}
                  className='responsive'
                  alt='Quotes'
                />
                <a href='https://festive-cray-95d506.netlify.app/'>
                  <div className='text-block'>
                    <p>Quotes app</p>
                    <span>
                      <MdOutlineComputer />
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </Fade>
        </WorkBottom>
      </WorkWrapper>
    </WorkContainer>
  );
}

export default Work;
