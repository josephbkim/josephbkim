import React, { Component } from "react";
import styled from "styled-components";

class Image extends Component {
  render() {
    return <ImageDiv>Image</ImageDiv>;
  }
}

export default Image;

const ImageDiv = styled.div`
  background-color: red;
  height: 100%;
  width: 33.3333%;
`;
