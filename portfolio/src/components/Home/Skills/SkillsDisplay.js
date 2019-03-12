import React, { Component } from "react";
import styled from "styled-components";
import { NONAME } from "dns";
var FontAwesome = require("react-fontawesome");

class SkillsDisplay extends Component {
  render() {
    return (
      <SkillsDispCon>
        <SkillsBox>
          <i className="fab fa-js fa-5x" />
          <h5 style={{ marginTop: "0px", textAlign: "center" }}>Javascript</h5>
        </SkillsBox>
        <SkillsBox>
          <i className="fab fa-react fa-5x" />
          <h5 style={{ marginTop: "0px", textAlign: "center" }}>React</h5>
        </SkillsBox>
        <SkillsBox>
          <i className="fab fa-node-js fa-5x" />
          <h5 style={{ marginTop: "0px", textAlign: "center" }}>Node.js</h5>
        </SkillsBox>
        <SkillsBox>
          <i className="fab fa-python fa-5x" />
          <h5 style={{ marginTop: "0px", textAlign: "center" }}>Python</h5>
        </SkillsBox>
        <SkillsBox>
          <i class="fas fa-database fa-5x" />
          <h5 style={{ marginTop: "0px", textAlign: "center" }}>MongoDB</h5>
        </SkillsBox>
        <SkillsBox>
          <i class="fas fa-database fa-5x" />
          <h5 style={{ marginTop: "0px", textAlign: "center" }}>
            Sql/PostgresSql
          </h5>
        </SkillsBox>
      </SkillsDispCon>
    );
  }
}

export default SkillsDisplay;

const SkillsDispCon = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  height: 80%;
  width: 100%;
`;

const SkillsBox = styled.div`
  display: grid;
  justify-content: center;
  align-content: space-around;
  width: 30vw;
`;
