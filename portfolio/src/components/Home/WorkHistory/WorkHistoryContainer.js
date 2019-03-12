import React, { Component } from "react";
import styled from "styled-components";
import LeftRightCon from "./LeftRightCon";

class WorkHistoryContainer extends Component {
  render() {
    return (
      <WorkHisCon>
        <h2>My Experience</h2>
        <LeftRightCon />
      </WorkHisCon>
    );
  }
}

export default WorkHistoryContainer;

const WorkHisCon = styled.div`
  height: 50vh;
  /* border: 1px solid black; */
  background-color: lightgray;
  text-align: center;
`;
