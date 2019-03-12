import React, { Component } from "react";
import styled from "styled-components";
import Intro from "./Intro/Intro";
import WorkHistoryContainer from "./Home/WorkHistory/WorkHistoryContainer";
import SkillsContainer from "./Home/Skills/SkillsContainer";

class HomePage extends Component {
  render() {
    return (
      <PageDiv>
        <Intro />
        <SkillsContainer />
        <WorkHistoryContainer />
      </PageDiv>
    );
  }
}

export default HomePage;

const PageDiv = styled.div`
  display: grid;
`;
