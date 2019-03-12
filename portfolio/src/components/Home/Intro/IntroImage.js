import React, { Component } from "react";
import styled from "styled-components";

class IntroImage extends Component {
  render() {
    return <ImgDiv>This is the Intro Image</ImgDiv>;
  }
}

export default IntroImage;

const ImgDiv = styled.div`
  display: flex;
  justify-self: center;
  align-self: center;
  width: 70%;
  border: 2px solid darkslategray;
`;
