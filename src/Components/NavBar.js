import React from "react";
import styled from "styled-components";

export default function NavBar(props) {
  return (
    <AppBar>
      <ul>
        <li>home</li>
        <li>about me</li>
        <li>portfolio</li>
        <li>contact</li>
      </ul>
    </AppBar>
  );
}

const AppBar = styled.div`
  width: 390px;
  background: rgba(255, 255, 255, 0.98);
  z-index: 5;
  padding: 0 45px 0 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  box-shadow: -5px -5px 10px rgba(0, 0, 0, 0.2);
  position: fixed;
  right: 0;
  bottom: 0;
  border-top-left-radius: 20px;
  @media (max-width: 650px) {
    justify-content: center;
    width: 100%;
    border-top-left-radius: 0;
  }
  ul {
    white-space: nowrap;
    display: flex;
    list-style: none;
    li {
      cursor: pointer;
      margin: 5px 10px;
      font-weight: 400;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
