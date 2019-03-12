import React, { Component } from "react";
import styled from "styled-components";

import Image from "./Image";

class ImageGrid extends Component {
  render() {
    return (
      <GridDiv>
        <Image />
        <Image />
        <Image />
      </GridDiv>
    );
  }
}

export default ImageGrid;

const GridDiv = styled.div`
  height: 35%;
  width: 100%;
  background-color: yellow;
  display: flex;
`;
