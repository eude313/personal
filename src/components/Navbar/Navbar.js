import React from "react";
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

export default function Navbar() {
  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo>EUDES</NavLogo>
          <MobileIcon className='icon'>
            <div className='one'></div>
            <div className='two'></div>
            <div className='three'></div>
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks>Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>Contact</NavLinks>
            </NavItem>
          </NavMenu>
        </NavContainer>
      </Nav>
    </>
  );
}
