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
  background: linear-gradient(135deg, #b4b4b4 0%, whitesmoke 100%);
  text-align: center;
  font-family: Cinzel, sans-serif;
`;
