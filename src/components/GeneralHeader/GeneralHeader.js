import React, { Component } from "react"
import Navbar from "react-bootstrap/Navbar"
import Button from "react-bootstrap/Button"
import { Link } from 'react-router-dom'

import { connect } from "react-redux"
import { clearUserData, logoutThenGoToLoginPage as logout } from "../../actions"

import { customNavbar, customButton, textStyle } from "./style"

class GeneralHeader extends Component {
  handleLogout = () => {
    this.props.clearUserData()
    this.props.logout()
  }

  render() {
    const { handleLogout } = this
    const { login } = this.props

    return (
      <React.Fragment>
        <Navbar variant="light" fixed="top" style={ customNavbar }>
          <Link to="/">
            <Navbar.Brand>
              <img
                src="../img/cuteBird.png"
                width="50"
                height="50"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </Link>

          <Link to="/">
            <Navbar.Brand style={ textStyle }>Kwitter</Navbar.Brand>
          </Link>

          { login && (
            <React.Fragment>
              <Button
                style={ customButton }
                variant="outline-dark"
                type="button"
                onClick={ handleLogout }
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
  logout, clearUserData
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GeneralHeader)
