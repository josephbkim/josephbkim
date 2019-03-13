import React, { Component } from "react";
import styled from "styled-components";

class IntroText extends Component {
  render() {
    return (
      <IntroTextDiv>
        <div>
          <h2>Hello!</h2>
          <div>My Name is Joe and I'm a Web Developer!</div>
          <div>I'm a former commercial construction</div>{" "}
          <div>project manager and I have a passion for</div>
          <div>creating things, fixing things, and </div>
          <div>helping people find what they are looking</div>
          <div>for...</div>
        </div>
      </IntroTextDiv>
    );
  }
}

export default IntroText;

const IntroTextDiv = styled.div`
  display: flex;
  width: 40vw;
  justify-content: center;
  align-items: center;
  font-size: 2.5vmin;
  padding-bottom: 4vh;
  font-family: "kaushan Script", cursive;
  margin: 0 auto 0 8vw;
`;
