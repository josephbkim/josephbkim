import React, { Component } from "react";
import styled from "styled-components";

class WorkRight extends Component {
  render() {
    return (
      <WorkRightDiv>
        <h3>..And Now</h3>
        <ListContainer>
          <UnorderedList>
            <li>Front End - Html, CSS, Javascript, React, Handlebars.js</li>
            <li>Back End - MongoDb, Sql, PostgreSQL, Python, Django</li>
            <li>Github</li>
          </UnorderedList>
        </ListContainer>
      </WorkRightDiv>
    );
  }
}

export default WorkRight;

const WorkRightDiv = styled.div`
  width: 40%;
  margin: 0 8vw 0 auto;
  background-color: white;
  border-radius: 1%;
  box-shadow: 6px 8px 2px 1px rgba(0, 0, 0, 0.25);
  font-size: 2vmin;
`;

const ListContainer = styled.div`
  padding: 2%;
`;

const UnorderedList = styled.ul`
  text-align: left;
`;
