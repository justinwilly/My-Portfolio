import React, { useState } from "react";

import styled, { keyframes } from "styled-components";
import styles from "./HoverFx.module.scss";
import { useInView } from "react-intersection-observer";
import axios from "axios";

export default function Contact() {
  //form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

  //form feedback
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);
  const [incomplete, setIncomplete] = useState(false);

  //scroll ref hook
  const [ref, inView] = useInView({
    threshold: 0
  });

  const handelEmail = succeeded => {
    if (succeeded) {
      setSuccess(true);
    } else {
      setFail(true);
    }
  };

  return (
    <ContactWrapper>
      {/* {success && (
        <MsgSuccess
          onClick={e => {
            setSuccess(false);
          }}
        >
          <button>x</button>
          <p>successfully sent your message!</p>
        </MsgSuccess>
      )}
      {fail && (
        <MsgFail
          onClick={e => {
            setFail(false);
          }}
        >
          <button>x</button>
          <p>
            hmmm... unfortunately I wasnt able to process this message. Might be
            a slight bug on my end. You can try again, or check out my email
            directly below!
          </p>
        </MsgFail>
      )}
      {incomplete && (
        <MsgIncomplete
          onClick={e => {
            setIncomplete(false);
          }}
        >
          <button>x</button>
          <p>
            Looks like you missed a couple things! Please provide at least a
            name, email, and some content so that I know who you are.
          </p>
        </MsgIncomplete>
      )}

      <ContactMe>
        <h3 className={inView ? styles.fadeInText : styles.fadeOutText}>
          Contact me!
        </h3>
        <form
          ref={ref}
          className={inView ? styles.fadeInText : styles.fadeOutText}
          onSubmit={e => {
            e.preventDefault();
            if (!name || !email || !content) {
              setIncomplete(true);
              return;
            }

            const newEmail = {
              name,
              email,
              subject,
              content
            };
            axios
              .post(
                `${process.env.REACT_APP_DB_URL ||
                  "http://localhost:5000"}/api/send-email`,
                newEmail
              )
              .then(res => {
                setContent("");
                setSubject("");
                setName("");
                setEmail("");

                handelEmail(true);
              })
              .catch(err => handelEmail(false));
          }}
          type="submit"
        >
          <label>
            name <span>*</span>
          </label>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            type="text"
            placeholder="name"
          />

          <label>
            e-mail <span>*</span>
          </label>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="text"
            placeholder="e-mail"
          />

          <label>subject</label>
          <input
            value={subject}
            onChange={e => setSubject(e.target.value)}
            type="text"
            placeholder="subject"
          />

          <label>
            content <span>*</span>
          </label>
          <textarea
            value={content}
            onChange={e => setContent(e.target.value)}
            type="text"
            placeholder="content"
          />

          <button type="submit">Submit</button>
        </form>
      </ContactMe> */}
      <p>email: jwilli756@gmail.com</p>
      <p>phone: (717)-364-5222</p>
      <p>
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/justin-c-williams-/"
          rel="noopener noreferrer"
          target="_blank"
        >
          https://www.linkedin.com/in/justin-c-williams-/
        </a>
      </p>
      <p>
        GitHub:{" "}
        <a
          href="https://github.com/justinwilly"
          rel="noopener noreferrer"
          target="_blank"
        >
          https://github.com/justinwilly
        </a>
      </p>
    </ContactWrapper>
  );
}

const ContactWrapper = styled.div`
  width: 100vw;
  min-height: 230px;
  background: #333333;
  color: white;
  text-align: left;
  padding: 10px;
  padding-bottom: 80px;
  a {
    color: white;
    &:hover {
      color: #f53b54;
    }
  }
  p {
    text-align: center;
  }
`;

const ContactMe = styled.div`
  padding: 40px;
  color: white;
  margin: auto;
  width: 100vw;
  max-width: 700px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  h3 {
    font-size: 35px;
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    input {
      width: 90%;
      margin: 10px 0;
      height: 35px;
      padding: 10px;
      font-size: 16px;
    }
    textarea {
      width: 90%;
      margin: 10px 0;
      height: 120px;
      padding: 10px;
      font-size: 16px;
    }
    button {
      width: 125px;
      height: 35px;
      font-size: 18px;
      color: white;
      border: none;
      cursor: pointer;
      background: #1cac35;
    }
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    left: -100px
  }
  100% {
    opacity: 1;
    left: 10px;
  }
`;

const MsgSuccess = styled.div`
  width: 350px;
  height: 100px;
  color: white;
  background: #1cac35;
  position: fixed;
  bottom: 100px;
  left: 10px;
  animation: 0.5s ${fadeIn} ease-out;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    position: absolute;
    top: 5px;
    right: 5px;
    color: white;
    background: transparent;
    border: none;
    font-size: 22px;
    cursor: pointer;
  }
`;

const MsgFail = styled.div`
  width: 350px;
  height: 100px;
  color: white;
  background: #db3830;
  padding: 20px;
  position: fixed;
  bottom: 100px;
  left: 10px;
  animation: 0.5s ${fadeIn} ease-out;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    position: absolute;
    top: 5px;
    right: 5px;
    color: white;
    background: transparent;
    border: none;
    font-size: 22px;
    cursor: pointer;
  }
`;
const MsgIncomplete = styled.div`
  width: 350px;
  height: 100px;
  color: white;
  background: #1d40aa;
  padding: 20px;
  position: fixed;
  bottom: 100px;
  left: 10px;
  animation: 0.5s ${fadeIn} ease-out;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    position: absolute;
    top: 5px;
    right: 5px;
    color: white;
    background: transparent;
    border: none;
    font-size: 22px;
    cursor: pointer;
  }
`;
