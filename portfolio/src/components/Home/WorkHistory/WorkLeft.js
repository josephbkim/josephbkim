import React, { Component } from "react";
import styled from "styled-components";

class WorkLeft extends Component {
  render() {
    return (
      <WorkLeftDiv>
        <h3>This is the Past!</h3>
      </WorkLeftDiv>
    );
  }
}

export default WorkLeft;

const WorkLeftDiv = styled.div`
  width: 50%;
`;
