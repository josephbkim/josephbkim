import React, { Component } from "react";
import styled from "styled-components";
import ProjectGallery from "./ProjectGallery";

class Projects extends Component {
  render() {
    return (
      <ContainerDiv>
        <H1>Projects Gallery</H1>
        <ProjectGallery />
      </ContainerDiv>
    );
  }
}

export default Projects;

const ContainerDiv = styled.div`
  height: 100vh;
  background: linear-gradient(155deg, black 0%, darkgrey 100%);
  text-align: center;
`;

const H1 = styled.h1`
  font-size: 4vh;
  font-family: "kaushan Script", cursive;
  color: whitesmoke;
`;
