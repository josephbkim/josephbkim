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
  height: 85%;
  width: 70%;
  border: 1px solid black;
`;
