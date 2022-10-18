import React, { useState } from "react";
import {
  Nav,
  NavContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  MobileIcon,
} from "./NavStyle";
import "./Nav.css";
import { AiOutlineDingding } from "react-icons/ai";

export default function Navbar() {
  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <>
      <Nav className={colorChange ? " colorChange " : "navbar"}>
        <NavContainer>
          <NavLogo>
            <span className='bj'>
              <AiOutlineDingding />
            </span>
            <span className='bj'>EUDES</span>
          </NavLogo>
          <MobileIcon className='icon'>
            {/* <div className='one'></div> */}
            <div className='two'></div>
            <div className='three'></div>
            <div className='four'></div>
            {/* <div className='five'></div> */}
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='/'>Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='about'>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='service'>Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='contact'>Contact</NavLinks>
            </NavItem>
          </NavMenu>
        </NavContainer>
      </Nav>
    </>
  );
}
