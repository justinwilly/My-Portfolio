import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import styles from "./HoverFx.module.scss";

function CurrentlyLearning() {
  const [ref, inView] = useInView({
    threshold: 0
  });

  return (
    <CLWrapper>
      <h2 className={inView ? styles.fadeInText : styles.fadeOutText}>
        I'm currently learning...
      </h2>
      <div className={inView ? styles.fadeInText : styles.fadeOutText}>
        <ul ref={ref}>
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
  min-height: 400px;
  background: #F2545b;
  padding-bottom: 20px;
  font-family: "Montserrat", sans-serif;
  @media (max-width: 900px) {
    padding-bottom: 40px;
  }
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
      @media (max-width: 900px) {
        font-size: 16px;
      }
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
