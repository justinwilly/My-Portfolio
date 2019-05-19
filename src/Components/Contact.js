import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

  return (
    <ContactWrapper>
      <ContactMe>
        <h3>Contact me!</h3>
        <form
          onSubmit={e => {
            e.preventDefault();

            const newEmail = {
              name,
              email,
              subject,
              content
            };
            axios
              .post("http://localhost:5000/api/send-email", newEmail)
              .then(res => {
                setContent("");
                setSubject("");
                setName("");
                setEmail("");
              })
              .catch(err => console.log(err));
          }}
          type="submit"
        >
          <label>name</label>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            type="text"
            placeholder="name"
          />

          <label>e-mail</label>
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

          <label>content</label>
          <textarea
            value={content}
            onChange={e => setContent(e.target.value)}
            type="text"
            placeholder="content"
          />

          <button type="submit">Submit</button>
        </form>
      </ContactMe>
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
