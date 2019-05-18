import React, { useState } from "react";
import styled from "styled-components";

import styles from "./HoverFx.module.scss";

import BGImg from "../images/debut_light.png";
import TrainingBotPic from "../images/codeimage1.jpeg";
import TipEasePic from "../images/codeimage2.jpeg";
import AppraisersBFF from "../images/codeimage3.jpeg";
import Portfolio from "../images/codeimage4.jpeg";

function Projects(props) {
  const [trainingBot, setTrainingBot] = useState(false);
  const [tipEase, setTipEase] = useState(false);
  const [appBff, setAppBff] = useState(false);
  const [portfolio, setPorfolio] = useState(false);

  return (
    <PortfolioWrapper>
      <h2>Recent Projects</h2>
      <hr style={{ marginBottom: "60px" }} />
      <Project style={{ backgroundImage: `url(${TrainingBotPic})` }}>
        <HoverProject
          onMouseEnter={e => setTrainingBot(true)}
          onMouseLeave={e => setTrainingBot(false)}
          className={trainingBot ? styles.popoverHover : styles.popoverHoverOut}
        >
          <p>Check it out!</p>
          <div>
            <button>github</button>
            <button>live site</button>
          </div>
        </HoverProject>
        <ProjectCover>
          <div>
            <h3>Training Bot</h3>
            <p>
              An application that utilizes Twillio, Sendgrid, and the Slack API
              to allow managers to distribute training materials to employees.
            </p>
          </div>
        </ProjectCover>
      </Project>
      <Project style={{ backgroundImage: `url(${TipEasePic})` }}>
        <HoverProject
          onMouseEnter={e => setTipEase(true)}
          onMouseLeave={e => setTipEase(false)}
          className={tipEase ? styles.popoverHover : styles.popoverHoverOut}
        >
          <p>Check it out!</p>
          <div>
            <button>github</button>
            <button>live site</button>
          </div>
        </HoverProject>
        <ProjectCover>
          <div>
            <h3>tipEase</h3>
            <p>
              An application that allows users to tip service workers directly!
            </p>
          </div>
        </ProjectCover>
      </Project>
      <Project style={{ backgroundImage: `url(${AppraisersBFF})` }}>
        <HoverProject
          onMouseEnter={e => setAppBff(true)}
          onMouseLeave={e => setAppBff(false)}
          className={appBff ? styles.popoverHover : styles.popoverHoverOut}
        >
          <p>Check it out!</p>
          <div>
            <button>github</button>
            <button>live site</button>
          </div>
        </HoverProject>
        <ProjectCover>
          <div>
            <h3>AppraisersBFF</h3>
            <p>
              An application that uses machine learning and the Zillow API to
              appraise your home!
            </p>
          </div>
        </ProjectCover>
      </Project>
      <Project style={{ backgroundImage: `url(${Portfolio})` }}>
        <HoverProject
          onMouseEnter={e => setPorfolio(true)}
          onMouseLeave={e => setPorfolio(false)}
          className={portfolio ? styles.popoverHover : styles.popoverHoverOut}
        >
          <p>Check it out!</p>
          <div>
            <button>github</button>
          </div>
        </HoverProject>
        <ProjectCover>
          <div>
            <h3>Portfolio</h3>
            <p>
              You're looking at it! I had a fantastic time building this
              portfolio site, and I hope you love it as much as I do!
            </p>
          </div>
        </ProjectCover>
      </Project>
    </PortfolioWrapper>
  );
}

export default Projects;

const PortfolioWrapper = styled.div`
  width: 100vw;
  padding: 0 55px 50px 55px;
  @media (max-width: 650px) {
    padding: 0;
  }
  background-image: url(${BGImg});
  font-family: "Montserrat", sans-serif;
  h2 {
    padding-top: 80px;
    font-size: 45px;
    color: black;
    margin: 0;
    font-weight: 200;
  }
`;

const Project = styled.div`
  margin: 30px auto;
  box-sizing: border-box;
  width: 90vw;
  max-width: 1000px;
  min-height: 275px;
  background: #28af3e;
  background-size: cover;
  background-position: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  position: relative;
  font-family: "Montserrat", sans-serif;

  @media (max-width: 650px) {
    min-height: 225px;
  }
`;

const HoverProject = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: black;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;

  p {
    font-size: 34px;
    font-weight: 800px;
    color: white;
    margin: 0;
  }

  button {
    cursor: pointer;
    width: 155px;
    height: 40px;
    margin: 10px;
    &:nth-child(1) {
      background: #19ab33;
      border: 2px solid #19ab33;
    }
    &:nth-child(2) {
      color: #19ab33;
      background: white;
      border: 2px solid white;
      font-weight: 400;
    }
    color: white;
    font-size: 20px;
    opacity: 1;
  }
`;
const ProjectCover = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  background: rgba(255, 255, 255, 0.1);
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 650px) {
    min-height: 225px;
    height: 225px;
  }
  div {
    width: 80%;
    padding: 60px 0;
    background: rgba(255, 255, 255, 0.95);
    display: flex;
    justify-content: center;
    flex-direction: column;
    @media (max-width: 650px) {
      height: 155px;
    }
    h3 {
      color: #f53b54;
      font-size: 35px;
      font-weight: 400;
      margin: 0;
    }
    p {
      color: black;
      padding: 0 20px;
      font-weight: 400;
    }
  }
`;
