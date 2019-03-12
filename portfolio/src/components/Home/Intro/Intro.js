import React, { Component } from "react";
import styled from "styled-components";
import IntroText from "./IntroText";
import IntroImage from "./IntroImage";

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
  height: 50vh;
  width: 100vw;
  background: lightgrey;
`;
