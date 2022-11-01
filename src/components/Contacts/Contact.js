import React from "react";
import Fade from "react-reveal";
import {
  ContactContainer,
  ContactWrapper,
  ContactCont,
  ContactCol1,
  ContactCol2,
} from "./ContactStyle";
import "./Contact.css";
import { FaMapMarkedAlt, FaPhoneSquare } from "react-icons/fa";
import { IoIosMailOpen } from "react-icons/io";

export default function Contact() {
  const id = "contact";
  return (
    <>
      <ContactContainer id={id}>
        <ContactWrapper>
          <h1 className='text1'>CONTACT </h1>
          <h1 className='text2'>
            GET IN<span className='text3'> TOUCH</span>
          </h1>
        </ContactWrapper>
        <ContactCont>
          <ContactCol1>
            <Fade
              left
              cascade>
              <div>
                <div className='head'>
                  <h1>DON'T BE SHY</h1>
                  <p>
                    Feel free to get in touch with me, you can let me know on
                    how to help you with design, development, consultations on
                    tech-related stuff, i am always open to discussing new
                    projects, creative ideas or opportunities that could benefit
                    me or you.
                  </p>
                </div>
                <div className='box-map'>
                  <div className='map'>
                    <div className='bx1'>
                      <h1>
                        <FaPhoneSquare />
                      </h1>
                    </div>
                    <div className='bx2'>
                      <h2>CALL ME</h2>
                      <p>+254723731295</p>
                    </div>
                  </div>

                  <div className='map'>
                    <div className='bx1'>
                      <h1>
                        <IoIosMailOpen />
                      </h1>
                    </div>
                    <div className='bx2'>
                      <h2>MAIL ME</h2>
                      <p>Charleseudes9@gmail.com</p>
                    </div>
                  </div>
                  <div className='map'>
                    <div className='bx1'>
                      <h1>
                        <FaMapMarkedAlt />
                      </h1>
                    </div>
                    <div className='bx2'>
                      <h2>ADDRESS</h2>
                      <p>57507 – 00200 Nairobi, Kenya</p>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </ContactCol1>
          <ContactCol2>
            <Fade
              top
              cascade>
              <div className='box'>
                <form>
                  <div className='bo1'>
                    <div className='cont1'>
                      <input
                        type='text'
                        name='name'
                        required='name'
                      />
                      <label>Your name</label>
                    </div>
                    <div className='cont2'>
                      <input
                        type='email'
                        name='email'
                        required='email'
                      />
                      <label>Email</label>
                    </div>
                    <div className='cont3'>
                      <input
                        type='text'
                        name='subject'
                        required='subject'
                      />
                      <label>Your Subject..</label>
                    </div>
                    <div className='cont4'>
                      <input
                        type='text'
                        name='mesage'
                        required='mesage'
                      />
                      <label>Your Mesage..</label>
                    </div>
                  </div>
                  <div className='btn'>
                    <div>
                      <a to='/Home'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Submit
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </Fade>
          </ContactCol2>
        </ContactCont>
      </ContactContainer>
    </>
  );
}
