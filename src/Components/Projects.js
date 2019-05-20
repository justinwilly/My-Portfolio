import React, { useState } from "react";
import styled from "styled-components";

import styles from "./HoverFx.module.scss";
import { useInView } from "react-intersection-observer";

import BGImg from "../images/debut_light.png";
import TrainingBotPic from "../images/trainingbot3.png";
import TipEasePic from "../images/tipeasepic.png";
import AppraisersBFF from "../images/appbff2.png";
import Portfolio from "../images/codeimage4.jpeg";

function Projects(props) {
  const [trainingBot, setTrainingBot] = useState(false);
  const [tipEase, setTipEase] = useState(false);
  const [appBff, setAppBff] = useState(false);
  const [portfolio, setPorfolio] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0
  });

  return (
    <PortfolioWrapper>
      <h2 ref={ref} className={inView ? styles.fadeInText : styles.fadeOutText}>
        Recent Projects
      </h2>
      <hr style={{ marginBottom: "60px" }} />

      <Project style={{ backgroundImage: `url(${TrainingBotPic})` }}>
        <HoverProject
          onMouseEnter={e => setTrainingBot(true)}
          onMouseLeave={e => setTrainingBot(false)}
          className={trainingBot ? styles.popoverHover : styles.popoverHoverOut}
        >
          <p>Check it out!</p>
          <div>
            <button
              onClick={e =>
                window.open(
                  "https://github.com/labs12-training-bot-2",
                  "_blank"
                )
              }
            >
              github
            </button>
            <button
              onClick={e =>
                window.open("https://training-bot-2.netlify.com/", "_blank")
              }
            >
              live site
            </button>
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
      <ProjectDiscription>
        <p>
          Training Bot was the capstone project for Lambda Schools main
          curriculum that I built. The team consisted of myself, as well as four
          other Lambda Students. It was built over the course of 5 weeks, and
          included technologies such as React/Redux, Node/express with a
          Postgres database, Stipe/Twillio/Sendgrid/Slack API's, Auth0 for
          authentication, and Material UI design. I assisted in the entire
          stack, implementing features on both the front end and the back end,
          as well as conducted user testing and more.
        </p>
      </ProjectDiscription>

      <Project style={{ backgroundImage: `url(${TipEasePic})` }}>
        <HoverProject
          onMouseEnter={e => setTipEase(true)}
          onMouseLeave={e => setTipEase(false)}
          className={tipEase ? styles.popoverHover : styles.popoverHoverOut}
        >
          <p>Check it out!</p>
          <div>
            <button
              onClick={e =>
                window.open(
                  "https://github.com/lambda-build-tipsease",
                  "_blank"
                )
              }
            >
              github
            </button>
            {/* <button
              onClick={e =>
                window.open("https://training-bot-2.netlify.com/", "_blank")
              }
            >
              live site
            </button> */}
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
      <ProjectDiscription>
        <p>
          tipEase is an application that I built during my Lambda School back
          end curriculum. It's an application that aims to helps service workers
          by letting them recieve tips directly from customers, as opposed to
          going through their employer. This was a four day sprint project, in
          which I was tasked to build the back end using node/express and
          postgres. I worked along side an android developer and a front end
          architect in order to build the application. Due to unforseen
          sircumstances, our web application wasnt completed by the student
          tasked to complete it, so I took the time myself to build out the
          front end that you see here as well!
        </p>
      </ProjectDiscription>

      <Project style={{ backgroundImage: `url(${AppraisersBFF})` }}>
        <HoverProject
          onMouseEnter={e => setAppBff(true)}
          onMouseLeave={e => setAppBff(false)}
          className={appBff ? styles.popoverHover : styles.popoverHoverOut}
        >
          <p>Check it out!</p>
          <div>
            <button
              onClick={e =>
                window.open(
                  "https://github.com/appraiserbff-lambda-build-week",
                  "_blank"
                )
              }
            >
              github
            </button>
            {/* <button>live site</button> */}
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
      <ProjectDiscription>
        <p>
          AppraiserBFF is and application I build during my Lambda School front
          end curriculum. Similar to tip ease, this was a 4 week sprint project.
          I worked along side one other front end developer, as well ass a back
          end developer and 2 data scientists to create an application which
          will find the information on your house, then respond back with an
          estimate based on local housing prices. It was built using React/redux
          and Node/express.
        </p>
      </ProjectDiscription>

      <Project style={{ backgroundImage: `url(${Portfolio})` }}>
        <HoverProject
          onMouseEnter={e => setPorfolio(true)}
          onMouseLeave={e => setPorfolio(false)}
          className={portfolio ? styles.popoverHover : styles.popoverHoverOut}
        >
          <p>Check it out!</p>
          <div>
            <button
              onClick={e =>
                window.open(
                  "https://github.com/TomHessburg/My-Portfolio",
                  "_blank"
                )
              }
            >
              github
            </button>
          </div>
        </HoverProject>
        <ProjectCover>
          <div>
            <h3>Portfolio</h3>
            <p>
              You're looking at it! Built using React with styled components.
            </p>
          </div>
        </ProjectCover>
      </Project>
      <ProjectDiscription>
        <p>
          I had a LOT of fun writing this portfolio website. If youd like to
          check out the code, feel free to take a look on github!
        </p>
      </ProjectDiscription>
    </PortfolioWrapper>
  );
}

export default Projects;

const PortfolioWrapper = styled.div`
  width: 100vw;
  padding: 0 55px 50px 55px;
  @media (max-width: 850px) {
    padding: 0 0 50px 0;
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
  margin: 30px auto 0 auto;
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
  background: #333333;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  p {
    font-size: 34px;
    font-weight: 800px;
    color: white;
    margin: 0;
    @media (max-width: 600px) {
      font-size: 28px;
    }
  }
  button {
    cursor: pointer;
    width: 155px;
    height: 40px;
    margin: 10px;
    color: white;
    font-size: 20px;
    opacity: 1;
    @media (max-width: 600px) {
      width: 105px;
      height: 30px;
    }
    &:nth-child(1) {
      background: #19ab33;
      border: 2px solid #19ab33;
    }
    &:nth-child(2) {
      background: white;
      border: 2px solid white;
      color: #19ab33;
    }
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
    background: rgba(255, 255, 255, 0.99);
    border: 1px solid black;
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
      @media (max-width: 650px) {
        font-size: 28px;
      }
    }
    p {
      color: black;
      padding: 0 20px;
      font-weight: 400;
      @media (max-width: 650px) {
        font-size: 14px;
      }
    }
  }
`;

const ProjectDiscription = styled.div`
  margin: 0 auto 30px auto;
  box-sizing: border-box;
  width: 80vw;
  max-width: 900px;
  min-height: 100px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.05);
  position: relative;
  font-family: "Montserrat", sans-serif;
  p {
    font-size: 16px;
  }
`;
