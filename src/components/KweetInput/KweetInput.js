import React, { Component } from "react"
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

import { connect } from "react-redux"
import { handleKweetSubmit } from "../../actions"

import { errorStyle, submitStyle, cardStyle } from "./style"

class KweetInput extends Component {
  state = {
    text: ""
  }

  handleSubmit = e => {
    const { handleKweetSubmit } = this.props

    e.preventDefault()
    handleKweetSubmit(this.state)
    this.setState({ text: "" })
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { handleSubmit, handleChange } = this

    const ErrorMessage = (
      <div>{"Message text must be between 2 and 255 characters"}</div>
    )

    return (
      <React.Fragment>
        <Card
          variant="dark"
          style={cardStyle}
        >
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                onChange={handleChange}
                name="text"
                type="textarea"
                placeholder="What are you thinking about?"
                autoComplete="off"
              />
            </Form.Group>
            <Button style={submitStyle} variant="primary" type="submit">
              Send
            </Button>
          </Form>
          {this.props.messages_failed ? (
            <div style={errorStyle}>{ErrorMessage}</div>
          ) : null}
        </Card>
      </React.Fragment>
    )
  }
}

function mapStateToProps({ messages }) {
  return {
    messages_failed: messages.messages_failed
  }
}

const mapDispatchToProps = {
  handleKweetSubmit
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KweetInput)
