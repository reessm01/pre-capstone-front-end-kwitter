import React, { Component } from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"

class GeneralHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar bg="primary" variant="dark" fixed="top">
          <Navbar.Brand href="/">
            <img
              src="./img/kenzieLogo.png"
              width="30"
              height="30"
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

          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar>
      </React.Fragment>
    )
  }
}

export default GeneralHeader
