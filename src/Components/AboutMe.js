import React, { useState } from "react";
import styled from "styled-components";
import BGTexture from "../images/ep_naturalblack.png";
import styles from "./HoverFx.module.scss";

export default function AboutMe() {
  const [css, setCss] = useState(false);
  const [html, setHtml] = useState(false);
  const [js, setJs] = useState(false);
  const [react, setReact] = useState(false);
  const [node, setNode] = useState(false);
  const [uiDesign, setUiDesign] = useState(false);
  const [adobe, setAdobe] = useState(false);
  const [git, setGit] = useState(false);

  return (
    <AboutMeStripe style={{ backgroundImage: `url(${BGTexture})` }}>
      <AboutMeInfo>
        <h2>About Me</h2>
        <hr />
        <Slogan>
          "...Persistence and determination alone are omnipotent. The slogan
          Press On! has solved and always will solve the problems of the human
          race...” <br />- Calvin Coolidge
        </Slogan>
        <AboutMeWrapper>
          <AboutMeText>
            <p>
              <span>Hi, everyone!</span> <br /> <br /> My name is Thomas
              Hessburg, and I'm a full stack software developer from Orlando,
              Florida. I love to create, and I'm excited to learn and grow in
              the tech field. <br />
              <br />
              After spending the past several years working as a
              welder/fabricator all around the country, as well as working for
              myself as an audio engineer writing and mixing music for
              bands/music groups, I've decided to take on a new challenge in
              learning to create software. I began my journey in mid-2018 by
              picking up some books/courses on JavaScript and spending 12 hour
              days trying to learn EVERYTHING that I possibly could. Come early
              2019, I began attending Lambda School, an online, fully immersive,
              30+ week dev bootcamp. I can proudly say that after over half a
              year and over 1,000 hours, I'm ready to make my move into the
              workforce. I would love to bring my talents to your company!
            </p>
          </AboutMeText>

          <AboutMeDecals>
            <h3>Technologies</h3>
            <TechnologyEven style={{ position: "relative" }}>
              <i className="fab fa-css3-alt" />
              <h4>CSS</h4>
              <PopOver
                className={css ? styles.popoverHover : styles.popoverHoverOut}
                onMouseEnter={e => {
                  setCss(true);
                }}
                onMouseLeave={e => {
                  setCss(false);
                }}
              >
                <p>Experienced in CSS, SASS, LESS</p>
              </PopOver>
            </TechnologyEven>
            <TechnologyOdd style={{ position: "relative" }}>
              <i className="fab fa-html5" />
              <h4>HTML</h4>
              <PopOver
                className={html ? styles.popoverHover : styles.popoverHoverOut}
                onMouseEnter={e => {
                  setHtml(true);
                }}
                onMouseLeave={e => {
                  setHtml(false);
                }}
              >
                <p>Practiced in semantic HTML and JSX</p>
              </PopOver>
            </TechnologyOdd>
            <TechnologyEven style={{ position: "relative" }}>
              <i className="fab fa-js" />
              <h4>JavaScript</h4>
              <PopOver
                className={js ? styles.popoverHover : styles.popoverHoverOut}
                onMouseEnter={e => {
                  setJs(true);
                }}
                onMouseLeave={e => {
                  setJs(false);
                }}
              >
                <p>Writing clean, ES6 syntax JavaScript is a strength</p>
              </PopOver>
            </TechnologyEven>
            <TechnologyOdd style={{ position: "relative" }}>
              <i className="fab fa-react" />
              <h4>React JS</h4>
              <PopOver
                className={react ? styles.popoverHover : styles.popoverHoverOut}
                onMouseEnter={e => {
                  setReact(true);
                }}
                onMouseLeave={e => {
                  setReact(false);
                }}
              >
                <p>Excellent at modern React/Redux (incuding hooks)</p>
              </PopOver>
            </TechnologyOdd>
            <TechnologyEven style={{ position: "relative" }}>
              <i className="fab fa-node-js" />
              <h4>Node JS </h4>
              <PopOver
                className={node ? styles.popoverHover : styles.popoverHoverOut}
                onMouseEnter={e => {
                  setNode(true);
                }}
                onMouseLeave={e => {
                  setNode(false);
                }}
              >
                <p>Node/Express backend development is a favorite</p>
              </PopOver>
            </TechnologyEven>
            <TechnologyOdd style={{ position: "relative" }}>
              <i className="fas fa-drafting-compass" />
              <h4>UI Design</h4>
              <PopOver
                className={
                  uiDesign ? styles.popoverHover : styles.popoverHoverOut
                }
                onMouseEnter={e => {
                  setUiDesign(true);
                }}
                onMouseLeave={e => {
                  setUiDesign(false);
                }}
              >
                <p>Building clean UI's is a passion of mine</p>
              </PopOver>
            </TechnologyOdd>
            <TechnologyEven style={{ position: "relative" }}>
              <i className="fab fa-adobe" />
              <h4>Adobe</h4>
              <PopOver
                className={adobe ? styles.popoverHover : styles.popoverHoverOut}
                onMouseEnter={e => {
                  setAdobe(true);
                }}
                onMouseLeave={e => {
                  setAdobe(false);
                }}
              >
                <p>Able to work with design docs in Photoshop and XD</p>
              </PopOver>
            </TechnologyEven>
            <TechnologyOdd style={{ position: "relative" }}>
              <i className="fab fa-github" />
              <h4>Git</h4>
              <PopOver
                className={git ? styles.popoverHover : styles.popoverHoverOut}
                onMouseEnter={e => {
                  setGit(true);
                }}
                onMouseLeave={e => {
                  setGit(false);
                }}
              >
                <p>
                  Solid git habbits are very important in my day to day
                  development
                </p>
              </PopOver>
            </TechnologyOdd>
          </AboutMeDecals>
        </AboutMeWrapper>
      </AboutMeInfo>
    </AboutMeStripe>
  );
}

const AboutMeStripe = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  padding: 100px 40px;
  padding-bottom: 100px;
  width: 100vw;
  background: #343434;
  clip-path: polygon(0 0, 100% 8%, 100% 100%, 0 100%);
  color: white;
  @media (max-width: 900px) {
    clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 100%);
    padding: 100px 10px;
  }
`;

const AboutMeInfo = styled.div`
  marign: auto;
  width: 100%;
  min-height: 300px;
  max-width: 1800px;
  padding: 15px;
  font-family: "Montserrat", sans-serif;
  h2 {
    font-size: 60px;
    margin: 10px;
    font-weight: 100;

    @media (max-width: 900px) {
      font-size: 48px;
    }
  }
`;

const AboutMeText = styled.div`
  text-align: start;
  padding: 10px;
  width: 45%;
  font-size: 20px;
  span {
    font-weight: 800;
    font-size: 24px;
    @media (max-width: 900px) {
      font-size: 20px;
    }
  }
  @media (max-width: 900px) {
    width: 100%;
    border-right: 0px solid rgba(0, 0, 0, 0);
    border-bottom: 1px solid rgba(255, 255, 255, 0.8);
    font-size: 16px;
  }
`;

const AboutMeDecals = styled.div`
  padding: 10px;
  width: 55%;
  color: black;
  background: white;
  @media (max-width: 900px) {
    width: 100%;
    margin-top: 25px;
  }
  i {
    font-size: 75px;
  }
  h3 {
    font-size: 25px;
    font-weight: 400;
  }
`;

const AboutMeWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const TechnologyEven = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  magin: 10px auto;
  background: rgba(0, 0, 0, 0.03);
  padding: 5px 80px;
  font-weight: 400;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h4 {
    font-size: 20px;
    margin: 0;
    color: #e8374f;
  }
`;
const TechnologyOdd = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  magin: 10px auto;
  background: rgba(0, 0, 0, 0.09);
  padding: 5px 80px;
  font-weight: 400;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h4 {
    font-size: 20px;
    margin: 0;
    color: #e8374f;
  }
`;

const PopOver = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: #07a828;
  color: white;
  opacity: 0;
  cursor: default;
  p {
    cursor: default;
  }
`;

const Slogan = styled.p`
  font-size: 17px;
  font-weight: 400;
  font-style: italic;
  margin: 10px auto 20px;
  width: 90%;
  max-width: 700px;
  font-family: "Montserrat", sans-serif;
  @media (max-width: 900px) {
    font-size: 14px;
    margin-bottom: 0;
  }
`;
