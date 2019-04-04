import React, { Component } from "react";
import styled from "styled-components";

class LeftWindow extends Component {
  render() {
    return (
      <LeftyDiv>
        <Proj1Image src="https://i.imgur.com/NjoVpJL.png" alt="proj1 image" />
      </LeftyDiv>
    );
  }
}

export default LeftWindow;

const LeftyDiv = styled.div`
  height: 65%;
  width: 100%;
  background: #333;
`;

const Proj1Image = styled.img`
  height: 100%;
  width: 100%;
`;
