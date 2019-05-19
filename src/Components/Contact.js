import React from "react";
import styled from "styled-components";

export default function Contact() {
  return (
    <ContactWrapper>
      <p>email: thomas.hessburg@gmail.com</p>
      <p>phone: (352)-636-5809</p>
      <p>
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/thomas-hessburg/"
          rel="noopener noreferrer"
          target="_blank"
        >
          https://www.linkedin.com/in/thomas-hessburg/
        </a>
      </p>
      <p>
        GitHub:{" "}
        <a
          href="https://github.com/TomHessburg/"
          rel="noopener noreferrer"
          target="_blank"
        >
          https://github.com/TomHessburg
        </a>
      </p>
    </ContactWrapper>
  );
}

const ContactWrapper = styled.div`
  width: 100vw;
  height: 230px;
  background: #333333;
  color: white;
  text-align: left;
  padding: 10px;
  a {
    color: white;
    &:hover {
      color: #f53b54;
    }
  }
`;
