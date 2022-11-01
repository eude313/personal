import React from "react";
import {
  SidebarContainer,
  Icon,
  SideWrapper,
  SideMenu,
  SideLink,
  SidebtnWrapper,
  SideButton,
} from "./SideStyle";
import { FaTimes } from "react-icons/fa";

export default function Sidenav({ isOpen, toggle }) {
  return (
    <>
      <SidebarContainer
        isOpen={isOpen}
        onClick={toggle}>
        <Icon onClick={toggle}>
          <FaTimes style={{ color: "white" }} />
        </Icon>
        <SideWrapper>
          <SideMenu>
            <SideLink to='about'>About Me</SideLink>
            <SideLink to='project'>Services</SideLink>
            <SideLink to='contact'>Contact</SideLink>
            <SideLink to='skills'>Skills</SideLink>
          </SideMenu>
          <SidebtnWrapper>
            <SideButton to='/'>Eudes</SideButton>
          </SidebtnWrapper>
        </SideWrapper>
      </SidebarContainer>
    </>
  );
}
