import React from "react";
//import Typist from "react-typist";
import BackgroundImg from "../images/baron14.jpg";
import styled from "styled-components";
import Parallax from "react-rellax";
import Particles from "react-particles-js";

const particlesOptions = {
  particles: {
    number: {
      value: 52,
      density: {
        enable: true,
        value_area: 2000
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 1,
        color: "#bbbbbb"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 2.891476416322726,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.1,
      width: 1
    },
    move: {
      enable: true,
      speed: 1.206824121731046,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 0,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};

export default function HeroSection() {
  return (
    <Parallax speed={4}>
      <HeroWrapper>
        <Hero>
          <h1>Thomas Hessburg</h1>
          <h2>
            <span>Full Stack</span> Web Developer
          </h2>
          <button
            onClick={e => {
              e.stopPropagation();
            }}
            style={{ cursor: "pointer" }}
          >
            See My Projects
          </button>
        </Hero>
        <HeroParticles className="particles" params={particlesOptions} />
      </HeroWrapper>
      <Socials>
        <i class="fab fa-github" />
        <i class="fab fa-twitter" />
        <i class="fab fa-facebook-square" />
        <i class="fas fa-envelope-open" />
      </Socials>
    </Parallax>
  );
}

const HeroWrapper = styled.div`
  height: 100vh;
  position: relative;
  overflow: hidden;
  background-image: url(${BackgroundImg});
  background-size: cover;
  background-position: center;
  background-color: black;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.4);
  opactiy: 0.4;
`;

const Hero = styled.div`
  display: block;
  width: 100vw;
  height: 100vh;
  background: rgba(18%, 22%, 31%, 0.8);
  color: white;
  h1 {
    font-family: "Cormorant Unicase", serif;
    font-weight: 200;
    padding: 220px 0 0 0;
    margin: 0;
    font-size: 100px;
    span {
      color: #e8374f;
    }
    @media (max-width: 1100px) {
      font-size: 80px;
    }
    @media (max-width: 850px) {
      font-size: 65px;
    }
    @media (max-width: 680px) {
      font-size: 55px;
    }
  }
  h2 {
    font-family: "Cormorant Unicase", serif;
    font-size: 40px;
    margin: 0;
    span {
      color: #e8374f;
    }
    @media (max-width: 1100px) {
      font-size: 35px;
    }
    @media (max-width: 850px) {
      font-size: 30px;
    }
    @media (max-width: 680px) {
      font-size: 25px;
    }
  }
  button {
    color: #f53b54;
    border: 2px solid #f53b54;
    background: transparent;
    font-size: 20px;
    width: 205px;
    height: 45px;
    margin: 15px;
    position: relative;
    z-index: 3;
    &:hover {
      background: #f53b54;
      color: white;
    }
  }
`;

const HeroParticles = styled(Particles)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  height; 100vh;

`;

const Socials = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 200px;
  display: flex;
  justify-content: space-between;
  font-size: 30px;
  color: white;
  z-index: 3;
  i {
    cursor: pointer;
    &:hover {
      color: #f53b54;
    }
  }
`;
