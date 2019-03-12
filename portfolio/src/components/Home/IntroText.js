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
          <div>project manager turned developer.</div>
          <div>I love to create things and fix things.</div>
        </div>
      </IntroTextDiv>
    );
  }
}

export default IntroText;

const IntroTextDiv = styled.div`
  display: flex;
  width: 50vw;
  justify-content: center;
  align-items: center;
`;
