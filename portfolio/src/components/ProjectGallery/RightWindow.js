import React, { Component } from "react";
import styled from "styled-components";

class RightWindow extends Component {
  render() {
    return (
      <RightDiv>
        <TextDiv>
          <H1>Hangman(Project 1)</H1>
        </TextDiv>
      </RightDiv>
    );
  }
}

export default RightWindow;

const RightDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const TextDiv = styled.div`
  margin: auto;
  display: grid;
  height: 95%;
  width: 95%;
  border: 1px solid black;
  text-align: center;
`;

const H1 = styled.h1`
  font-size: 100%;
`;
