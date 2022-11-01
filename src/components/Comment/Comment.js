import React from "react";
import "./Coment.css";
import {
  CommentContainer,
  CommentWrapper,
  CommentTop,
  CommentBottom,
} from "./ComentStyle";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Fade } from "react-reveal";

function Comment() {
  return (
    <>
      <CommentContainer>
        <CommentWrapper>
          <CommentTop>
            <h1 className='text1'>COMMENTS</h1>
            <h1 className='text2'>
              TESTIMO<span className='text3'>NIALS</span>
            </h1>
          </CommentTop>
          <CommentBottom>
            <Fade
              top
              cascade>
              <div className='yhj'>
                <h1>
                  <FaQuoteLeft />
                </h1>
                <p>
                  A very jovial, enthusiastic fellow whose website's designs far
                  exceeded my expectations on every front, and I have very high
                  expectations from him.
                </p>
                <h2>Raphael Katana</h2>
                <label>Technical Mentor</label>
                <span>
                  <FaQuoteRight />
                </span>
              </div>
              <div className='yhj'>
                <h1>
                  <FaQuoteLeft />
                </h1>
                <p>
                  Working with Eudes has been a most pleasant experience! his
                  dedication and passion for what he does is exemplified by his
                  unrivaled team contribution and attentiveness to the specific
                  needs of our project. I look forward to doing more future
                  projects with him.
                </p>
                <h2>Juma Barrack</h2>
                <label>Technical Friend</label>
                <span>
                  <FaQuoteRight />
                </span>
              </div>
              <div className='yhj'>
                <h1>
                  <FaQuoteLeft />
                </h1>
                <p>
                  The attention to detail from Eudes is incredible. He his
                  having projects that proves his capability.
                </p>
                <h2>Edna Tuti</h2>
                <label>Mentor</label>
                <span>
                  <FaQuoteRight />
                </span>
              </div>
            </Fade>
          </CommentBottom>
        </CommentWrapper>
      </CommentContainer>
    </>
  );
}

export default Comment;
