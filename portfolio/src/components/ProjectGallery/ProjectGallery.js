import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

import LeftWindow from "./LeftWindow";
import RightWindow from "./RightWindow";
import ImageGrid from "./ImageGrid";

class ProjectGallery extends Component {
  state = {
    projectOneImages: {
      images: [
        "https://i.imgur.com/NjoVpJL.png",
        "https://i.imgur.com/k5GAK8A.png",
        
      ]
    }
  };
  //   componentDidMount() {
  //     axios.get("https://react-hacker.danzuzevich.com/thumbnails").then(res => {
  //       console.log(res.data.thumbnails);
  //     });
  //   }
  render() {
    return (
      <GalleryDiv>
        <LeftDiv style={{ flex: 1 }}>
          <LeftWindow />
          <ImageGrid />
        </LeftDiv>
        <RightDiv>
          <RightWindow />
        </RightDiv>
      </GalleryDiv>
    );
  }
}

export default ProjectGallery;

const GalleryDiv = styled.div`
  background-color: white;
  height: 35vh;
  width: 70vw;
  margin: 40px auto;
  display: flex;
  border-radius: 1px;
`;

const LeftDiv = styled.div`
  width: 50%;
`;

const RightDiv = styled.div`
  width: 50%;
`;
