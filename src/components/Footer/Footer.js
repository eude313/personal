import React from "react";
import {
  FooterContainer,
  FooterWrapper,
  FooterCont1,
  FooterCont2,
} from "./FooterStyle.js";
import "./Footer.css";
import { BsInstagram, BsGithub, BsGoogle } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { Fade } from "react-reveal";

export default function Footer() {
  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <FooterCont1>
            <Fade
              top
              cascade>
              <div className='icons'>
                <FaFacebookF />
              </div>
              <div className='icons'>
                <BsInstagram />
              </div>
              <div className='icons'>
                <BsGoogle />
              </div>
              <div className='icons'>
                <AiFillLinkedin />
              </div>
              <div className='icons'>
                <BsGithub />
              </div>
            </Fade>
          </FooterCont1>
          <FooterCont2>
            <Fade
              top
              cascade>
              <div>
                <h1>
                  <span className='ed'>© </span>
                  2022 Copyright: Eudes Charles.com
                </h1>
              </div>
            </Fade>
          </FooterCont2>
        </FooterWrapper>
      </FooterContainer>
    </>
  );
}
