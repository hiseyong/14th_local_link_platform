import React, { useState } from "react";
import { FaHeart, FaBook, FaFilm, FaPaintBrush, FaHome } from "react-icons/fa";
import styled from "styled-components";

const NavbarContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  height: 70px;
  border-radius: 35px 35px 0 0; /* 둥근 형태 */
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 10px;

  & svg {
    font-size: 24px;
    color: ${(props) => (props.isActive ? "#007BFF" : "#aaa")};
    transition: color 0.3s;
  }

  & span {
    margin-top: 5px;
    font-size: 12px;
    color: ${(props) => (props.isActive ? "#007BFF" : "#aaa")};
  }

  &:hover svg {
    color: #007bff;
  }
`;

export const BottomNavBar = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <NavbarContainer>
      <NavItem isActive={activeTab === "academic"} onClick={() => setActiveTab("academic")}>
        <FaBook />
        <span>학술</span>
      </NavItem>
      <NavItem isActive={activeTab === "media"} onClick={() => setActiveTab("media")}>
        <FaFilm />
        <span>미디어</span>
      </NavItem>
      <NavItem isActive={activeTab === "home"} onClick={() => setActiveTab("home")}>
        <FaHome />
        <span>전체</span>
      </NavItem>
      <NavItem isActive={activeTab === "design"} onClick={() => setActiveTab("design")}>
        <FaPaintBrush />
        <span>디자인</span>
      </NavItem>
      <NavItem isActive={activeTab === "like"} onClick={() => setActiveTab("like")}>
        <FaHeart />
        <span>찜</span>
      </NavItem>
    </NavbarContainer>
  );
};