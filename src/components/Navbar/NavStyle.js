import styled from "styled-components";
import { Link } from "react-scroll";

export const Nav = styled.nav`
  height: 80px;
  background: transparent;
  padding: 0px;
  position: sticky;
  top: 0;
  left: 0px;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    padding: 0 12px;
  }
`;
export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  color: white;
  font-family: "Carter One", cursive;
`;
export const NavLogo = styled.div`
  justify-self: flex-start;
  color: #feb300;
  cursor: pointer;
  font-size: 45px;
  height: auto;
  display: flex;
  align-items: center;
  text-decoration: none;
`;
export const MobileIcon = styled.div`
  cursor: pointer;
  color: black;
  width: 30px;
  display: none;
  margin: 12px auto;
  padding: 8px 10px;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
  position: absolute;
  top: 0;
  right: 15px;

  @media screen and (max-width: 960px) {
    display: block;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 3rem;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;
export const NavItem = styled.div`
  height: 80px;
`;
export const NavLinks = styled(Link)`
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  padding: 0 17px;
  height: 80px;
  cursor: pointer;
  &:hover {
    color: #feb300;
  }
  &.active {
    border-top: 3px solid #feb300;
    color: #feb300;
  }
  }
`;
