import React, { Component } from "react";
import styled from "styled-components";

class WorkRight extends Component {
  render() {
    return (
      <WorkRightDiv>
        <h3>This is Now!</h3>
      </WorkRightDiv>
    );
  }
}

export default WorkRight;

const WorkRightDiv = styled.div`
  width: 50%;
`;
