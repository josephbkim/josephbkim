import React, { Component } from "react";
import styled from "styled-components";

class Image extends Component {
  render() {
    return (
      <ImageDiv>
        <Img src={this.props.images} alt="image" />
      </ImageDiv>
    );
  }
}

export default Image;

const ImageDiv = styled.div`
  height: 100%;
  width: 33%;
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
`;
