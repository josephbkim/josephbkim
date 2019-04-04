import React, { Component } from "react";
import styled from "styled-components";

class Resume extends Component {
  render() {
    return (
      <ContainerDiv>
        <ResumeDiv>
          <Img src="https://i.imgur.com/160XLq0.png" alt="resume" />
        </ResumeDiv>
      </ContainerDiv>
    );
  }
}

export default Resume;

const ContainerDiv = styled.div`
  height: 100vh;
  background: linear-gradient(155deg, black 0%, darkgrey 100%);
`;

const ResumeDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 90vh;
`;

const Img = styled.img`
  margin-top: 2vh;
  height: 100%;
`;
