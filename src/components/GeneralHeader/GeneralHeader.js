import React, { Component } from "react"
import { connect } from "react-redux"
import { logout } from "../../actions"

import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"

class GeneralHeader extends Component {
  handleLogout() {
    this.props.logout(this.props.login.id)
  }

  render() {
    const { login } = this.props
    
    return (
      <React.Fragment>
        <Navbar bg="primary" variant="dark" fixed="top">
          <Navbar.Brand href="/">
            <img
              src="./img/cuteBird.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>

          {/* Nav bar intentionally left blank until we decide if we want to add that as an option */}
          <Nav className="mr-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>

          
          {login &&
            <React.Fragment>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
              </Form>
              <Button 
                style={{ marginLeft: '2rem' }}
                variant="outline-light"
                type="button"
                onClick={ this.handleLogout }
              >Logout</Button>
            </React.Fragment>
          }
        </Navbar>
      </React.Fragment>
    )
  }
}

export default connect(
  ({ auth }) => ({
    login: auth.login
  },
  { logout }
  )
)(GeneralHeader)
