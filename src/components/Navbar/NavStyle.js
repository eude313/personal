import styled from "styled-components";

export const Nav = styled.nav`
  height: 80px;
  background: black;
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
`;
export const NavLogo = styled.div`
  justify-self: flex-start;
  cursor: pointer;
  font-size: 45px;
  height: auto;
  display: flex;
  align-items: center;
  text-decoration: none;
`;
export const MobileIcon = styled.div`
  cursor: pointer;
  width: 30px;
  display: block;
  margin: 12px auto;
  padding: 8px 10px;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  height: 80px;
  color: white;

  //   @media screen and (max-width: 960px) {
  //     display: none;
  //   }
`;
export const NavItem = styled.div`
  height: 80px;
`;
export const NavLinks = styled.a`
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  padding: 0 12px;
  height: 80px;
  cursor: pointer;
  &:hover {
    border-bottom: 3px solid white);
    color: rgb(226, 117, 189);
    text-shadow: 1px 1px 1px #80808091;
  }
`;
