import React, { Component } from "react"
import { connect } from "react-redux"
import { logoutThenGoToLoginPage as logout } from "../../actions"

import Navbar from "react-bootstrap/Navbar"
import Button from "react-bootstrap/Button"
import { customNavbar, customButton, textStyle } from "./style"

class GeneralHeader extends Component {
  handleLogout = () => {
    this.props.logout()
  }

  render() {
    const { login } = this.props

    return (
      <React.Fragment>
        <Navbar variant="light" fixed="top" style={customNavbar}>
          <Navbar.Brand href="/">
            <img
              src="../img/cuteBird.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>

          <Navbar.Brand href="/" style={textStyle}>Kwitter</Navbar.Brand>

          {login && (
            <React.Fragment>
              <Button
                style={customButton}
                variant="outline-dark"
                type="button"
                onClick={this.handleLogout}
              >
                Logout
              </Button>
            </React.Fragment>
          )}
        </Navbar>
      </React.Fragment>
    )
  }
}

function mapStateToProps({ auth }) {
  return {
    login: auth.login
  }
}

const mapDispatchToProps = {
  logout
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GeneralHeader)
