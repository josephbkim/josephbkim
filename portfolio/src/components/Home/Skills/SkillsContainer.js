import React, { Component } from "react";
import styled from "styled-components";
import SkillsDisplay from "./SkillsDisplay";

class SkillsContainer extends Component {
  render() {
    return (
      <SkillConDiv>
        <h2>Relevant skills</h2>
        <SkillsDisplay />
      </SkillConDiv>
    );
  }
}

export default SkillsContainer;

const SkillConDiv = styled.div`
  height: 50vh;
  background-color: whitesmoke;
  text-align: center;
`;
