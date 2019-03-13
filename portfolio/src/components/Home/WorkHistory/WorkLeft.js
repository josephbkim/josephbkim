import React, { Component } from "react";
import styled from "styled-components";

class WorkLeft extends Component {
  render() {
    return (
      <WorkLeftDiv>
        <h3>The Past..</h3>
        <UnorderedList>
          <li>Project Manager</li>

          <li>Estimator & Budget Tracker</li>

          <li>Responsible for contractor, and employee relations</li>

          <li>Responsible for client relations</li>

          <li>Responsible for making and maintaining schedule</li>

          <li>
            Responsible for Quality control, Code compliance, and Inspections
          </li>
        </UnorderedList>
      </WorkLeftDiv>
    );
  }
}

export default WorkLeft;

const WorkLeftDiv = styled.div`
  width: 40%;
  background-image: url("https://i.imgur.com/7pAJWwM.jpg");
  font-size: 2vmin;
  background-size: 100%;
  opacity: 0.4;
  border-radius: 1%;
  margin: 0 auto 0 8vw;
  border: 1px solid white;
  box-shadow: 6px 8px 2px 1px rgba(0, 0, 0, 0.7);
  overflow: hidden;
`;

const UnorderedList = styled.ul`
  text-align: left;
  text-decoration: none;
`;
