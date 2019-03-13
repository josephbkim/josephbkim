import React, { Component } from "react";
import styled from "styled-components";
import WorkLeft from "./WorkLeft";
import WorkRight from "./WorkRight";

class LeftRightCon extends Component {
  render() {
    return (
      <LeftRightDiv>
        <WorkLeft />
        <WorkRight />
      </LeftRightDiv>
    );
  }
}

export default LeftRightCon;

const LeftRightDiv = styled.div`
  display: flex;
  height: 37vh;
  width: 100%;
`;
