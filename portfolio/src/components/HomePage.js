import React, { Component } from "react";
import styled from "styled-components";
import WorkHistoryContainer from "./Home/WorkHistory/WorkHistoryContainer";
import SkillsContainer from "./Home/Skills/SkillsContainer";
import Intro from "./Home/Intro/Intro";
import Footer from "./Home/Footer/Footer";

class HomePage extends Component {
  render() {
    return (
      <PageDiv>
        <Intro />
        <SkillsContainer />
        <WorkHistoryContainer />
        <Footer />
      </PageDiv>
    );
  }
}

export default HomePage;

const PageDiv = styled.div`
  display: grid;
`;
