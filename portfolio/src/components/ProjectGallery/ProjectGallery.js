import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

import LeftWindow from "./LeftWindow";
import RightWindow from "./RightWindow";
import ImageGrid from "./ImageGrid";

class ProjectGallery extends Component {
  state = {
    projectOneImages: [
      {
        imgUrl: "https://i.imgur.com/NjoVpJL.png",
        title: "Hangman",
        bodyText:
          "My first project was built with vanilla javascript and jquery"
      },
      {
        imgUrl: "https://i.imgur.com/k5GAK8A.png",
        title: "Wireframe",
        description: "First Wireframe...The project didn't end up to far off."
      }
    ]
  };
  //   componentDidMount() {
  //     axios.get("https://react-hacker.danzuzevich.com/thumbnails").then(res => {
  //       console.log(res.data.thumbnails);
  //     });
  //   }
  render() {
    return (
      <GalleryDiv>
        <div style={{ flex: 1 }}>
          <LeftWindow />
          <ImageGrid />
        </div>
        <div style={{ flex: 1, padding: "40px" }}>
          <RightWindow />
        </div>
      </GalleryDiv>
    );
  }
}

export default ProjectGallery;

const GalleryDiv = styled.div`
  background-color: #ddd;
  height: 500px;
  width: 1024px;
  margin: 40px auto;
  display: flex;
`;
