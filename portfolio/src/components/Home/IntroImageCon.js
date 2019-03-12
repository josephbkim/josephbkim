import React, { Component } from "react";
import styled from "styled-components";
import IntroImage from "./IntroImage";

class IntroImageCon extends Component {
  render() {
    return (
      <IntroImg>
        <IntroImage />
      </IntroImg>
    );
  }
}

export default IntroImageCon;

const IntroImg = styled.div`
  display: flex;
  width: 50vw;
  border: 1px solid black;
  justify-content: center;
`;
