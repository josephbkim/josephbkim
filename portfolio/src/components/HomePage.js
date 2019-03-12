import React, { Component } from "react";
import styled from "styled-components";
import Intro from "./Home/Intro";

class HomePage extends Component {
  render() {
    return (
      <PageDiv>
        <Intro />
      </PageDiv>
    );
  }
}

export default HomePage;

const PageDiv = styled.div`
  display: flex;
`;
