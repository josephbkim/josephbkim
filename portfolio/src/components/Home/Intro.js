import React, { Component } from "react";
import styled from "styled-components";
import IntroText from "./IntroText";
import IntroImage from "./IntroImageCon";

class Intro extends Component {
  render() {
    return (
      <IntroDiv>
        <IntroText />
        <IntroImage />
      </IntroDiv>
    );
  }
}

export default Intro;

const IntroDiv = styled.div`
  display: flex;
  height: 40vh;
  width: 100vw;
  background: aqua;
`;
