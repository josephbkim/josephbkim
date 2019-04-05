import React, { Component } from "react";
import styled from "styled-components";

class LeftWindow extends Component {
  render() {
    return (
      <LeftyDiv>
        <Proj1Image src={this.props.images[0]} alt="proj1 image" />
      </LeftyDiv>
    );
  }
}

export default LeftWindow;

const LeftyDiv = styled.div`
  height: 64.7%;
  width: 100%;
  background: #333;
  border: 1px solid black;
  border-radius: 2px;
`;

const Proj1Image = styled.img`
  height: 100%;
  width: 100%;
`;
