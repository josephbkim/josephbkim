import React, { Component } from "react";
import styled from "styled-components";

import Image from "./Image";

class ImageGrid extends Component {
  render() {
    return (
      <GridDiv>
        {this.props.images.map(image => (
          <Image images={image} />
        ))}
      </GridDiv>
    );
  }
}

export default ImageGrid;

const GridDiv = styled.div`
  height: 34.7%;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
