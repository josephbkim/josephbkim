import React, { Component } from "react";
import { Button } from "styled-button-component";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu
} from "styled-dropdown-component";

class DropDown extends Component {
  state = {
    hidden: true
  };
  handleOpenCloseDropdown() {
    this.setState({
      hidden: !this.state.hidden
    });
  }

  render() {
    const { hidden } = this.state;
    return (
      <Dropdown>
        <Button onClick={() => this.handleOpenCloseDropdown()}>
          <i class="fas fa-bars" style={{ color: "white" }} />
        </Button>
        <DropdownMenu hidden={hidden}>
          <DropdownItem>
            <Link to="/" style={{ color: "black" }}>
              Home
            </Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/projects" style={{ color: "black" }}>
              Projects
            </Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/contact" style={{ color: "black" }}>
              Contact
            </Link>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default DropDown;
