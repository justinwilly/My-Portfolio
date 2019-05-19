import React from "react";
import styled from "styled-components";

export default function NavBar(props) {
  return (
    <AppBar>
      <ul>
        <li
          onClick={e => {
            console.log(window.innerWidth);
            window.scrollTo({
              // a reminder on why i did this for future me: can definitely just use normal refs, but using scrollTo is a lot more flexibile.
              top: 0,
              left: 0,
              behavior: "smooth"
            });
          }}
        >
          home
        </li>
        <li
          onClick={e => {
            window.scrollTo({
              top: window.innerHeight + 100,
              left: 0,
              behavior: "smooth"
            });
          }}
        >
          about me
        </li>
        <li
          onClick={e => {
            window.scrollTo(
              window.innerWidth > 900
                ? {
                    top: window.innerHeight * 2 + 700,
                    left: 0,
                    behavior: "smooth"
                  }
                : {
                    top: window.innerHeight * 3 + 800,
                    left: 0,
                    behavior: "smooth"
                  }
            );
          }}
        >
          portfolio
        </li>
        <li
          onClick={e => {
            window.scrollTo({
              top: 100000,
              left: 0,
              behavior: "smooth"
            });
          }}
        >
          contact
        </li>
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
