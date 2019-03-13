import React, { Component } from "react";
import styled from "styled-components";

class IntroImage extends Component {
  render() {
    return (
      <ImgDiv>
        <Img src="https://cdn.pixabay.com/photo/2015/12/01/15/43/black-1072366_960_720.jpg" />
      </ImgDiv>
    );
  }
}

export default IntroImage;

const ImgDiv = styled.div`
  display: flex;
  justify-self: center;
  align-self: center;
  width: 80%;
  border: 2px solid darkslategray;
  border-radius: 2%;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;
