import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <FooterDiv>
        <LinkDivs>
          <Link to="/contact" style={{ color: "white" }}>
            <i className="far fa-address-card fa-4x" />
          </Link>
          <Link to="/contact" style={{ color: "white" }}>
            Contact Me
          </Link>
        </LinkDivs>
        <LinkDivs>
          <a href="https://github.com/josephbkim" style={{ color: "white" }}>
            <i className="fab fa-github-alt fa-4x" />
          </a>
          <a href="https://github.com/josephbkim" style={{ color: "white" }}>
            GitHub
          </a>
        </LinkDivs>
        <LinkDivs>
          <a
            href="https://www.linkedin.com/in/joseph-kim-661877173"
            style={{ color: "white" }}
          >
            <i className="fab fa-linkedin fa-4x" />
          </a>
          <a href="https://github.com/josephbkim" style={{ color: "white" }}>
            linkedin
          </a>
        </LinkDivs>
        <LinkDivs>
          <Link to="/resume" style={{ color: "white" }}>
            <i className="far fa-file-alt fa-4x" />
          </Link>
          <Link to="/resume" style={{ color: "white" }}>
            Resume
          </Link>
        </LinkDivs>
      </FooterDiv>
    );
  }
}

export default Footer;

const FooterDiv = styled.div`
  display: flex;
  height: 15vh;
  background: #000000;
  justify-content: space-around;
`;

const LinkDivs = styled.div`
  display: grid;
  height: 50%;
  width: 20vw;
  margin: auto;
  justify-content: center;
  text-align: center;
`;
