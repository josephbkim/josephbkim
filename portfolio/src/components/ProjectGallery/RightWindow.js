import React, { Component } from "react";
import styled from "styled-components";

class RightWindow extends Component {
  render() {
    return (
      <RightDiv>
        <TextDiv>
          <H1>{this.props.title}</H1>
          <p>{this.props.description}</p>
        </TextDiv>
      </RightDiv>
    );
  }
}

export default RightWindow;

const RightDiv = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  border: 1px solid black;
  width: 100%;
  height: 100%;
`;

const TextDiv = styled.div`
  margin: auto;
  display: grid;
  height: 95%;
  width: 95%;
  text-align: center;
`;

const H1 = styled.h1`
  font-size: 100%;
`;
