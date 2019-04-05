import React, { Component } from "react";
import styled from "styled-components";
import ProjectGallery from "./ProjectGallery";

class Projects extends Component {
  state = {
    projects: [
      {
        title: "Hangman (Project 1)",
        description:
          "This was my first project.  Technologies used were - HTML, CSS, Javascript, JQuery",
        images: [
          "https://i.imgur.com/NjoVpJL.png",
          "https://i.imgur.com/k5GAK8A.png",
          "https://i.imgur.com/D0epyp3.jpg"
        ],
        id: 1
      },
      {
        title: "Tool Tracker (Project 2)",
        description:
          "Tool Tracker was my 2nd project. The idea behind it was an employee would be able to check out company tools and the company would be able to track it.  Technologies used - Mongo, Express, Handlebars, Node.js.",
        images: [
          "https://i.imgur.com/4henE3B.png?1",
          "https://i.imgur.com/pU4WWBp.png",
          "https://i.imgur.com/kZCDPUo.png"
        ],
        id: 2
      },
      {
        title: "Project Tracker (Project 3)",
        description:
          "Project Tracker was my 3rd project.  As a former construction project manager, I wanted an app that ",
        images: [
          "https://i.imgur.com/fg1nKlS.png",
          "https://i.imgur.com/zB71Ybz.png",
          "https://i.imgur.com/GMoTFXf.png"
        ],
        id: 3
      }
    ]
  };
  render() {
    return (
      <ContainerDiv>
        <H1>Projects Gallery</H1>
        <ProjectGallery projects={this.state.projects} />
      </ContainerDiv>
    );
  }
}

export default Projects;

const ContainerDiv = styled.div`
  height: 100%;
  background: linear-gradient(155deg, black 0%, darkgrey 100%);
  background-position: 0 0;
  background-repeat: no-repeat;
  background-attachment: fixed;
  text-align: center;
`;

const H1 = styled.h1`
  font-size: 4vh;
  font-family: "kaushan Script", cursive;
  color: whitesmoke;
`;
