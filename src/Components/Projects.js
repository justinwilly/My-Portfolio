import React, { useState } from "react";
import styled from "styled-components";

import styles from "./HoverFx.module.scss";
import { useInView } from "react-intersection-observer";

import BGImg from "../images/debut_light.png";
import Portfolio from "../images/codeimage4.jpeg";
import Refresh from "../images/refresh-leaderboard.png";
import Huber from "../images/huber.png";
import Rvbnb from "../images/rvbnb.png";
import Foodie from "../images/foodie.png";

function Projects(props) {
  const [trainingBot, setTrainingBot] = useState(false);
  const [tipEase, setTipEase] = useState(false);
  const [appBff, setAppBff] = useState(false);
  const [portfolio, setPorfolio] = useState(false);
  const [doorman, setDoorman] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0
  });

  return (
    <PortfolioWrapper>
      <h2 ref={ref} className={inView ? styles.fadeInText : styles.fadeOutText}>
        Recent Projects
      </h2>
      <hr style={{ marginBottom: "60px" }} />


{/* #### APP: REFRESH ####### */}

      <Project style={{ backgroundImage: `url(${Refresh})` }}>
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
                  "https://github.com/justinwilly/refresh-fe",
                  "_blank"
                )
              }
            >
              github
            </button>
            <button
              onClick={e =>
                window.open("https://www.refresh-app.com/", "_blank")
              }
            >
              live site
            </button>
          </div>
        </HoverProject>
        <ProjectCover>
          <div>
            <h3>Refresh</h3>
            <p>
              An application that utilizes React, NodeJS, and AWS
              thats helps managers promote healthy habits to their teams.
            </p>
          </div>
        </ProjectCover>
      </Project>
      <ProjectDiscription>
        <p>
          Refresh was the capstone project for Lambda Schools main
          curriculum that I built. I worked with five other Lambda Students and
          took over this project to expand its features over the course of 8
          weeks. Technologies used include: React/Redux, Node.js/Express,
          PostgreSQL, Auth0, and Styled Components.
          I assisted in the entire stack by implementing features on the
          front end, and conducted user testing, and more.
        </p>
        <MobileLinks>
          <p>
            github:{" "}
            <a
              href="https://www.refresh-app.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.refresh-app.com/
            </a>
          </p>
          <p>
            live site:{" "}
            <a
              href="https://github.com/justinwilly/refresh-fe"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/justinwilly/refresh-fe
            </a>
          </p>
        </MobileLinks>
      </ProjectDiscription>


{/* #### APP: HUBER ####### */}

      <Project style={{ backgroundImage: `url(${Huber})` }}>
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
                  "https://github.com/justinwilly/portfolio-website/tree/gh-pages",
                  "_blank"
                )
              }
            >
              github
            </button>
            <button
              onClick={e =>
                window.open("https://hubernicolas.com/", "_blank")
              }
            >
              live site
            </button>
          </div>
        </HoverProject>
        <ProjectCover>
          <div>
            <h3>Nicolas Huber</h3>
            <p>
              A website for Olympic Swiss Snowboarder Nicolas Huber!
            </p>
          </div>
        </ProjectCover>
      </Project>
      <ProjectDiscription>
        <p>
          Nicolas Huber is an Olympic Snowboarder that was in need of a personal website to promote himself.
          The goal of the project was to show his love for snowboarding and show his appreciation for his fans and
          sponsors. Collaborating with his manager and himself to come up with the perfect UI design,  I built the front end using HTML and CSS along with 
          some Javascript. Due to a personal time restraints when building this I plan to overhaul the current 
          website and rebuild in ReactJS. During this project I also had to learn how to effectively use Google Analytics,
          Google Search Console and other SEO tools!
          <MobileLinks>
            <p>
              github:{" "}
              <a
                href="https://github.com/justinwilly/portfolio-website/tree/gh-pages"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/justinwilly/portfolio-website/tree/gh-pages
              </a>
            </p>
            <p>
              live site:{" "}
              <a
                href="https://hubernicolas.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://hubernicolas.com/
              </a>
            </p>
          </MobileLinks>
        </p>
      </ProjectDiscription>



{/* #### APP: RVBNB ####### */}

      <Project style={{ backgroundImage: `url(${Rvbnb})` }}>
        <HoverProject
          onMouseEnter={e => setDoorman(true)}
          onMouseLeave={e => setDoorman(false)}
          className={doorman ? styles.popoverHover : styles.popoverHoverOut}
        >
          <p>Check it out!</p>
          <div>
            <button
              onClick={e =>
                window.open("https://github.com/bwft-RVcamping-Airbnb/Backend", "_blank")
              }
            >
              github
            </button>
            <button
              onClick={e =>
                window.open("https://rvairbnb.netlify.app/", "_blank")
              }
            >
              live site
            </button>
          </div>
        </HoverProject>
        <ProjectCover>
          <div>
            <h3>RV-bnb</h3>
            <p>An application that allows RV owners to rent property from Land owners!</p>
          </div>
        </ProjectCover>
      </Project>
      <ProjectDiscription>
        <p>
          Rv-bnb is an application built during my Lambda School back end curriculum build week at
          . This was a four day project,
          and I worked as the solo back end developer alongside my team
          of 4 frond end developers.
          RV-bnb allows users to quickly find information about
          properties through the application then users reserve them for specific dates. 
          My back end tech stack included:
          Node.js/Express with PostgreSQL.
        </p>
        <MobileLinks>
          <p>
            github:{" "}
            <a
              href="https://github.com/bwft-RVcamping-Airbnb/Backend"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/bwft-RVcamping-Airbnb/Backend
            </a>
          </p>
          <p>
            live site:{" "}
            <a
              href="https://rvairbnb.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://rvairbnb.netlify.app/
            </a>
          </p>
        </MobileLinks>
      </ProjectDiscription>


{/* #### APP: FOODIE ####### */}

      <Project style={{ backgroundImage: `url(${Foodie})` }}>
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
                  "https://github.com/LS-Foodie-Fun6/Front-End",
                  "_blank"
                )
              }
            >
              github
            </button>
            <button
              onClick={e =>
                window.open("https://cranky-snyder-f61439.netlify.app/", "_blank")
              }
            >
              live site
            </button>
            
          </div>
        </HoverProject>
        <ProjectCover>
          <div>
            <h3>Foodie Fun</h3>
            <p>
              A Food-Focused journaling application for eating out!
            </p>
          </div>
        </ProjectCover>
      </Project>
      <ProjectDiscription>
        <p>
          I built Foodie Fun during my front end curriculum build week at
          Lambda School. Similar to Rvbnb this was also a four day project,
          though this time I worked alongside two front end developers. Also
          on our team were one UI developer and a back end developer.
          Foodie Fun allows users to quickly journal information about their
          meal through the application then add it to their profile to viewed another time. 
          Our front end tech stack included:
          React, Redux, React Router, Connected Router, Styled Components and CSS.
        </p>
        <MobileLinks>
          <p>
            github:{" "}
            <a
              href="https://github.com/LS-Foodie-Fun6/Front-End"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/LS-Foodie-Fun6/Front-End
            </a>
          </p>
        </MobileLinks>
      </ProjectDiscription>


{/* #### APP: PORTFOLIO ####### */}

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
                  "https://github.com/justinwilly/My-Portfolio",
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
        <MobileLinks>
          <p>
            github:{" "}
            <a
              href="https://github.com/justinwilly/My-Portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/justinwilly/My-Portfolio
            </a>
          </p>
        </MobileLinks>
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
    color: black;
    font-size: 20px;
    opacity: 1;
    @media (max-width: 600px) {
      width: 105px;
      height: 30px;
    }
    &:nth-child(1) {
      background: #F2545b;
      border: 5px solid #F2545b;
    }
    &:nth-child(2) {
      background: white;
      border: 5px solid white;
      color: #F2545b;
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
    font-weight: 400;
  }
`;

const MobileLinks = styled.div`
  display: none;
  @media (max-width: 850px) {
    display: block;
  }
  a {
    color: blue;
  }
`;
