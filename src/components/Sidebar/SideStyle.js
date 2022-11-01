import styled from "styled-components";
import { Link } from "react-scroll";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  background: black;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;
export const Icon = styled.div`
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cusor: pointer;
  outline: none;
`;
export const SideWrapper = styled.div`
  color: #fff;
`;
export const SideMenu = styled.ul`
  display: grid;
  grid-template-columns: 2fr;
  grid-template-rows: repeat(4, 90px);
  text-align: center;
`;
export const SideLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  outline: none;
  &:hover {
    color: #feb300;
    transition: 0.2s ease-in-out;
  }
`;
export const SidebtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const SideButton = styled(Link)`
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-right: -2rem;
  transition-duration: 0.4s;
  cursor: pointer;
  background-color: black;
  color: white;
  border: 2px solid #feb300;
  border-radius: 26px;
  &:hover {
    background-color: #feb300;
    color: black;
    text-shadow: 1px 1px 1px #80808091;
  }
`;
