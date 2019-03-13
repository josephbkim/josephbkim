import React, { Component } from "react";
import styled from "styled-components";
import IntroText from "./IntroText";
import IntroImageCon from "./IntroImageCon";

class Intro extends Component {
  render() {
    return (
      <IntroDiv>
        <IntroText />
        <IntroImageCon />
      </IntroDiv>
    );
  }
}

export default Intro;

const IntroDiv = styled.div`
  display: flex;
  height: 50vh;
  width: 100vw;
  background: #b4b4b4;
`;
