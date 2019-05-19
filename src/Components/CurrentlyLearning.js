import React from "react";

import styled from "styled-components";

function CurrentlyLearning() {
  return (
    <CLWrapper>
      <h2>I'm currently learning...</h2>
      <div>
        <ul>
          <li>GraphQL</li>
          <li>AWS</li>
          <li>Advanced Node JS Concepts</li>
          <li>Python</li>
          <li>Algorithms/Data Structures</li>
        </ul>
      </div>
      {/* <p>And im EXTREMELY interested in learning just about ANYTHING!</p> */}
    </CLWrapper>
  );
}

const CLWrapper = styled.div`
  width: 100vw;
  height: 400px;
  background: #f53b54;
  padding-bottom: 20px;
  font-family: "Montserrat", sans-serif;
  h2 {
    margin: 0 auto 10px auto;
    padding: 30px 10px;
    width: 70%;
    max-width: 800px;
    color: white;
    font-size: 35px;
    text-align: start;
  }
  div {
    width: 70%;
    margin: auto;
    border: 1px solid white;
    text-align: start;
    display: flex;
    max-width: 800px;
    li {
      color: white;
      font-size: 20px;
      font-weight: 400;
      list-style-type: square;
    }
  }
  p {
    width: 60%;
    color: white;
    margin: 15px auto;
    font-weight: 400;
  }
`;

export default CurrentlyLearning;
