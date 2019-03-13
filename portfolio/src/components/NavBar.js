import React, { Component } from "react";
import styled from "styled-components";
import DropDown from "./Home/Footer/DropDown";

class NavBar extends Component {
  render() {
    return (
      <NavyDiv>
        <NameDiv>Joseph B Kim</NameDiv>
        <LinkDiv>
          <DropDown />
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
  background: #000000;
`;

const NameDiv = styled.div`
  font-family: "kaushan Script", cursive;
  padding-left: 11vw;
  align-self: center;
  width: 50%;
  color: whitesmoke;
`;

const LinkDiv = styled.div`
  display: flex;
  font-family: Cinzel, sans-serif;
  font-size: 85%;
  font-weight: bold;
  justify-content: space-around;
  align-self: center;
  width: 50%;
  text-decoration: none;
  padding-right: 7vw;
`;
