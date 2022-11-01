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
import { Link, animateScroll as scroll } from "react-scroll";

export default function Navbar({ toggle }) {
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
      <Nav className={colorChange ? "navbar colorChange" : "navbar"}>
        <NavContainer>
          <NavLogo to='/'>
            <span className='bj'>
              <AiOutlineDingding />
            </span>
            <span className='bj'>EUDES</span>
          </NavLogo>
          <MobileIcon
            className='icon'
            onClick={toggle}>
            <div className='two'></div>
            <div className='three'></div>
            <div className='four'></div>
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                activeClass='active'
                to='/'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className='nav-item'>
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                activeClass='active'
                to='about'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className='nav-item'>
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                activeClass='active'
                to='skills'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className='nav-item'>
                Skills
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                activeClass='active'
                to='project'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className='nav-item'>
                Projects
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                activeClass='active'
                to='contact'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className='nav-item'>
                Contact
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavContainer>
      </Nav>
    </>
  );
}
