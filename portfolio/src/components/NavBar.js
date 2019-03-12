import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <NavyDiv>
        <NameDiv>Joseph B Kim</NameDiv>
        <LinkDiv>
          <Link to="/" style={{ color: "white" }}>
            Home
          </Link>
          <Link to="/projects" style={{ color: "white" }}>
            Projects
          </Link>
          <Link to="/contact" style={{ color: "white" }}>
            Contact
          </Link>
        </LinkDiv>
      </NavyDiv>
    );
  }
}

export default NavBar;

const NavyDiv = styled.div`
  height: 5vh;
  display: flex;
  /* justify-content: flex-end; */
  border: 1px solid black;
  background: black;
`;

const NameDiv = styled.div`
  font-family: "kaushan Script", cursive;
  padding-left: 2vw;
  align-self: center;
  width: 50%;
  color: whitesmoke;
`;

const LinkDiv = styled.div`
  display: flex;
  font-family: "Pragati Narrow", sans-serif;
  justify-content: space-around;
  align-self: center;
  width: 50%;
  text-decoration: none;
`;
