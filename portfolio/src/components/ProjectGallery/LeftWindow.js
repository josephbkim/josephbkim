import React, { Component } from "react";
import styled from "styled-components";

class LeftWindow extends Component {
  render() {
    return <LeftyDiv />;
  }
}

export default LeftWindow;

const LeftyDiv = styled.div`
  height: 65%;
  width: 100%;
  background: #333;
`;
