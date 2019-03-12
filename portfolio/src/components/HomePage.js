import React, { Component } from "react";
import styled from "styled-components";

class HomePage extends Component {
  render() {
    return (
      <PageDiv>
        <div>
          <h2>Hello!</h2>
          <div>My Name is Joe and I'm a Web Developer!</div>
          <div>I'm a former commercial construction</div>{" "}
          <div>project manager turned developer.</div>
          <div>I love to create things and fix things.</div>
        </div>
      </PageDiv>
    );
  }
}

export default HomePage;

const PageDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20vh;
  /* font-family: "Pragati Narrow", sans-serif; */
  font-family: "Cinzel", serif;
`;
