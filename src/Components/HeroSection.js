import React, { useState } from 'react'
import Typist from 'react-typist';
import BackgroundImg from '../images/baron14.jpg';
import styled from 'styled-components';
import ParticleEffectButton from 'react-particle-effect-button';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDownOutlined';
import Parallax from 'react-rellax'

export default function HeroSection() {

    const [typeStatus, setTypeStatus] = useState(true);
    // const [hidden, setHidden] = useState(false);
    return (
        <div>
            {/* <NavBar>
                <ParticleEffectButton
                    color='rgba(101, 190, 113, 0.96)'
                    hidden={hidden}
                >
                    <SeeResume
                        onClick={() => {
                            setHidden(true);
                            setTimeout(() => setHidden(false), 3000);
                        }}
                    >
                        See Resume
                        </SeeResume>
                </ParticleEffectButton>
            </NavBar> */}
            <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative" }}>
                <LandingCard>
                    <NameContainer>
                        <h1>Thomas Hessburg</h1>
                        <br />
                        <p>Software Developer</p>
                    </NameContainer>
                    <TyperContainer>
                        {typeStatus && <Typist
                            cursor={{
                                show: false
                            }}
                            onTypingDone={() => {
                                setTypeStatus(false);
                                setTypeStatus(true);
                            }}
                        >
                            <Parallax speed={2}>
                                <h2>React</h2>
                                <Typist.Backspace count={5} delay={800} />
                                <h2>Redux</h2>
                                <Typist.Backspace count={5} delay={800} />
                                <h2>Node</h2>
                                <Typist.Backspace count={4} delay={800} />
                                <h2>Express</h2>
                                <Typist.Backspace count={7} delay={800} />
                            </Parallax>
                        </Typist>}
                    </TyperContainer>
                </LandingCard>
                <BGImg src={BackgroundImg} />
                {/* <KeyboardArrowDown
                    style={{
                        position: "absolute",
                        bottom: "25px",
                        right: "25px",
                        transform: "scale(3)",
                        cursor: "pointer"
                    }}
                /> */}

            </div>
        </div >
    )
}


const NavBar = styled.div`
width: 200px;
padding: 10px;
position: absolute;
right: 0;
`;


const LandingCard = styled.div`
  margin: 35vh auto;
  margin-left: 50vw;
  max-width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
  height: 30vh;
  max-height: 280px;
  background: rgba(43, 53, 71, 0.90);
  box-shadow: 0 5px 18px rgba(10,10,10,0.35);
  position: relative;
  @media(max-width: 1700px){
    margin-left: 45vw;
  }
  @media(max-width: 1600px){
    margin-left: 38vw;
  }
  @media(max-width: 1500px){
    margin-left: 35vw;
  }
  @media(max-width: 1400px){
    margin-left: 33vw;
  }
  @media(max-width: 1600px){
    margin-left: 39vw;
  }
  @media(max-width: 1500px){
    margin-left: 27vw;
  }
  @media(max-width: 1400px){
    margin-left: 20vw;
  }
  @media(max-width: 1300px){
    margin-left: 18vw;
  }
  @media(max-width: 1200px){
    margin-left: 12vw;
  }
  @media(max-width: 1100px){
    margin-left: 8vw;
  }
  h2{
    font-size: 60px;
    color: rgb(255,255,255);
    font-weight: 100;
    @media(max-width: 600px){
      font-size: 40px;
    }
  }
`;

const TyperContainer = styled.div`
  display: flex;
`;

const NameContainer = styled.div`
    background: #828791;
    color: white;
    position: absolute;
    top: -95px;
    right: -40px;
    padding: 10px 30px;
    box-shadow: 0 3px 3px 2px rgba(0,0,0,0.2);
    h1{
        font-size: 30px;
        margin-bottom: 0px;
        @media(max-width: 600px){
            font-size: 25px;
          }
    }
    p{
        margin-top: 0;
        font-size: 18px;
        @media(max-width: 600px){
            font-size: 14px;
          }
    }
`;

const BGImg = styled.img`
  position: absolute;
  top: 0px;
  left: 0;
  z-index: -1;
  width: 40vw;
  min-width: 370px;
  overflow-x: hidden;
  opacity: 0.9;
  border-bottom-right-radius: 150px;
  box-shadow: 4px 0 4px 2px rgba(0,0,0,0.3);
`;

const SeeResume = styled.div`
    cursor: pointer;
    padding: 10px;
    color: black;
    font-size: 20px;
`;