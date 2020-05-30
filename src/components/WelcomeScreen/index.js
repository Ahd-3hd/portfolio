import React from "react";
import { Wrapper, IconsWrapper, IconButton } from "./index.style";
import Keyboard from "react-mk";
import cvImg from "../../imgs/cv.svg";
import githubImg from "../../imgs/github.svg";
import gmailImg from "../../imgs/email.svg";
import phoneImg from "../../imgs/phone.svg";

const WelcomeScreen = () => {
  return (
    <Wrapper>
      <p className="first">
        <Keyboard
          sentenceDelayPerCharRange={[0, 0]}
          keyPressDelayRange={[50, 70]}
        >
          {({ type }) => type(1000, "Hi")}
        </Keyboard>
      </p>
      <div className="second">
        <p>
          <Keyboard
            sentenceDelayPerCharRange={[0, 0]}
            keyPressDelayRange={[50, 70]}
          >
            {({ type }) => type(1500, "I'm\xa0")}
          </Keyboard>
        </p>

        <p className="red">
          <Keyboard
            sentenceDelayPerCharRange={[0, 0]}
            keyPressDelayRange={[50, 70]}
          >
            {({ type }) => type(2000, "Ahd Hani")}
          </Keyboard>
        </p>
      </div>
      <p className="third">
        <Keyboard
          sentenceDelayPerCharRange={[0, 0]}
          keyPressDelayRange={[50, 70]}
        >
          {({ type }) => type(2800, "I'm a Mobile And Web Developer.")}
        </Keyboard>
      </p>

      <p className="third">
        <Keyboard
          sentenceDelayPerCharRange={[0, 0]}
          keyPressDelayRange={[50, 70]}
        >
          {({ type }) => type(5500, "Please, Select Mode:")}
        </Keyboard>
      </p>
      <br />
      <p className="green">
        <Keyboard
          sentenceDelayPerCharRange={[0, 0]}
          keyPressDelayRange={[50, 70]}
        >
          {({ type }) => type(7000, "Interactive & Hacky View")}
        </Keyboard>
      </p>
      <p>
        <Keyboard
          sentenceDelayPerCharRange={[0, 0]}
          keyPressDelayRange={[50, 70]}
        >
          {({ type }) => type(9000, "OR")}
        </Keyboard>
      </p>
      <p className="green">
        <Keyboard
          sentenceDelayPerCharRange={[0, 0]}
          keyPressDelayRange={[50, 70]}
        >
          {({ type }) => type(10000, "Simple & Quick View")}
        </Keyboard>
      </p>
      <IconsWrapper>
        <IconButton>
          <svg viewBox="0 0 512 512">
            <defs />
            <path d="M196 90c-16.538 0-31 13.462-31 30s14.462 30 31 30 31-13.462 31-30-14.462-30-31-30zM85.605 13.184L13.184 85.605c-1.359 1.359-2.45 2.9-3.611 4.395H90V9.571c-1.494 1.161-3.036 2.254-4.395 3.613zM196 180c-41.353 0-76 35.647-76 77v15h152v-15c0-41.353-34.647-77-76-77z" />
            <path d="M377 0H120v105c0 8.291-6.709 15-15 15H0v347c0 8.291 6.709 15 15 15h279.853c-11.757-17.525-19.252-38.009-21.718-60H105c-8.291 0-15-6.709-15-15s6.709-15 15-15h168.419c1.174-10.4 3.272-20.471 6.693-30H105c-8.291 0-15-6.709-15-15s6.709-15 15-15h190.48c21.661-31.74 56.336-53.963 96.52-58.484V15c0-8.291-6.709-15-15-15zm-75 287c0 8.291-6.709 15-15 15H105c-8.291 0-15-6.709-15-15v-30c0-42.017 24.976-80.089 60.72-96.858C141.053 149.487 135 135.489 135 120c0-33.091 27.909-60 61-60s61 26.909 61 60c0 15.489-6.053 29.487-15.72 40.142C277.024 176.911 302 214.983 302 257v30z" />
            <path d="M407 302c-57.99 0-105 47.01-105 105s47.01 105 105 105 105-47.01 105-105-47.01-105-105-105zm55.605 85.605l-60 60A14.952 14.952 0 01392 452a14.95 14.95 0 01-10.605-4.395l-30-30c-5.859-5.859-5.859-15.352 0-21.211s15.352-5.859 21.211 0L392 415.789l49.395-49.395c5.859-5.859 15.352-5.859 21.211 0s5.859 15.352-.001 21.211z" />
          </svg>
          <p>RESUME</p>
        </IconButton>

        <IconButton>
          <svg viewBox="0 0 512 512">
            <defs />
            <path d="M550.99 0H17.051C8.948 0 2.381 6.567 2.381 14.67v538.694c0 8.104 6.567 14.67 14.67 14.67h177.498v-.129c8.011-.092 14.149-4.577 14.431-12.166.728-19.725.214-39.492.214-58.562-14.296.667-27.944 2.473-41.438 1.695-29.762-1.714-52.632-14.413-64.493-43.556-7.026-17.265-17.613-32.032-34.101-41.886-3.079-1.842-5.771-4.554-8.127-7.308-3.079-3.592-2.503-7.282 2.362-8.268 4.908-.998 10.27-1.695 15.11-.79 19.009 3.568 32.154 15.49 42.216 31.347 19.896 31.371 50.521 40.974 84.976 26.487 1.921-.808 4.363-2.766 4.725-4.553 2.778-13.887 7.968-26.549 18.427-37.65-11.628-2.154-22.399-3.739-32.962-6.188-30.417-7.038-57.742-19.7-77.724-44.848-16.303-20.514-23.758-44.528-27.185-70.086-5.367-40.031-.563-77.503 26.928-109.493 1.389-1.616 2.142-4.927 1.524-6.94-6.885-22.497-5.833-44.805.991-67.051 3.581-11.683 4.578-12.265 16.5-10.637.729.098 1.438.281 2.161.404 23.898 3.954 44.468 15.526 64.731 27.95 2.724 1.671 6.873 2.711 9.866 1.983 48.397-11.744 96.702-11.695 145.093.043 2.809.679 6.561-.288 9.247-1.695 11.016-5.759 21.561-12.454 32.718-17.914 12.98-6.346 26.652-11.12 41.371-10.857 2.576.049 6.561 2.509 7.423 4.786 8.856 23.464 10.723 47.375 3.666 71.794-.753 2.607.367 6.322 1.769 8.892 6.965 12.779 16.689 24.572 21.096 38.127 13.434 41.316 8.538 82.229-9.749 121.06-16.757 35.594-47.834 53.63-84.621 62.933-12.424 3.14-25.153 5.049-38.556 7.681 17.564 18.348 20.318 40.74 20.006 64.192-.324 24.192-.238 48.391-.251 72.589-.006 11.72 5.11 18.195 14.039 18.574-.006.037 188.723.037 188.723.037V14.67C565.653 6.567 559.087 0 550.99 0z" />
          </svg>
          <p>GITHUB</p>
        </IconButton>
        <IconButton>
          <svg viewBox="0 0 512 512">
            <defs />
            <path d="M256 345.944a14.98 14.98 0 01-8.976-2.982L90 225.683V451h332V225.683l-157.024 117.28a14.985 14.985 0 01-8.976 2.981zM60 203.276L0 158.463V406c0 24.813 20.187 45 45 45h15zM452 203.276V451h15c24.813 0 45-20.187 45-45V158.463z" />
            <g>
              <path d="M442.02 61H69.979L256 199.785z" />
              <path d="M486.33 65.371L264.97 230.523c-2.661 1.985-5.815 2.977-8.97 2.977s-6.309-.992-8.97-2.977L25.67 65.371C10.504 72.616 0 88.103 0 106v16.843a14.904 14.904 0 016.024 2.675L256 312.222l249.976-186.704a14.917 14.917 0 016.024-2.675V106c0-17.897-10.504-33.385-25.67-40.629z" />
            </g>
          </svg>
          <p>EMAIL</p>
        </IconButton>
        <IconButton>
          <svg viewBox="0 0 58 58">
            <defs />
            <g>
              <path d="M24.017 33.983c-5.536-5.536-6.786-11.072-7.068-13.29a1.988 1.988 0 01.571-1.664L22 14.551a2 2 0 00.282-2.475L15.149 1a2 2 0 00-2.591-.729L1.107 5.664a1.989 1.989 0 00-1.1 1.987c.6 5.7 3.085 19.712 16.855 33.483s27.78 16.255 33.483 16.855a1.989 1.989 0 001.987-1.1l5.393-11.451A2 2 0 0057 42.851L45.924 35.72a2 2 0 00-2.475.28l-4.478 4.48c-.436.439-1.05.65-1.664.571-2.218-.282-7.754-1.532-13.29-7.068z" />
              <path d="M43 0c-8.284 0-15 5.82-15 13a11.756 11.756 0 002.55 7.251L29 28l7.864-3.146A16.9 16.9 0 0043 26c8.284 0 15-5.82 15-13S51.284 0 43 0zm-8 15a2 2 0 110-4 2 2 0 010 4zm8 0a2 2 0 110-4 2 2 0 010 4zm8 0a2 2 0 110-4 2 2 0 010 4z" />
            </g>
          </svg>
          <p>EMAIL</p>
        </IconButton>
      </IconsWrapper>
    </Wrapper>
  );
};

export default WelcomeScreen;
