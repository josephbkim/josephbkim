import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

import LeftWindow from "./LeftWindow";
import RightWindow from "./RightWindow";
import ImageGrid from "./ImageGrid";

class ProjectGallery extends Component {
  render() {
    return (
      <div>
        {this.props.projects.map(project => (
          <GalleryDiv>
            <LeftDiv style={{ flex: 1 }}>
              <LeftWindow images={project.images} />
              <ImageGrid images={project.images} />
            </LeftDiv>
            <RightDiv>
              <RightWindow
                title={project.title}
                description={project.description}
              />
            </RightDiv>
          </GalleryDiv>
        ))}
      </div>
    );
  }
}

export default ProjectGallery;

const GalleryDiv = styled.div`
  background-color: black;
  height: 35vh;
  width: 70vw;
  margin: 40px auto;
  display: flex;
  border: 1px solid black;
  border-radius: 2%;
  box-shadow: 6px 8px 2px 1px rgba(0, 0, 0, 0.25);
`;

const LeftDiv = styled.div`
  width: 50%;
  border-radius: 2%;
  background-color: black;
`;

const RightDiv = styled.div`
  width: 50%;
`;
