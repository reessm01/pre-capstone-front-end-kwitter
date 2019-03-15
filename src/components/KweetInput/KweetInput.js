import React, { Component } from "react"
import { connect } from "react-redux"
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { handleKweetSubmit } from "../../actions"
import { errorStyle, submitStyle } from "./style"

class KweetInput extends Component {
  state = {
    text: ""
  }

  handleSubmit = e => {
    const { handleKweetSubmit, token } = this.props

    e.preventDefault()
    handleKweetSubmit({ text: this.state, token })
    e.target.value = ""
  }

  render() {
    const { handleSubmit } = this
    
    const ErrorMessage = (
      <div>{"Message text must be between 2 and 255 characters"}</div>
    )

    return (
      <React.Fragment>
        <Card bg="primary" variant="dark" style={{ padding: "2rem" }}>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                onChange={e => this.setState({ text: e.target.value })}
                name="kweet"
                type="textarea"
                placeholder="What are you thinking about?"
                autoComplete="off"
              />
            </Form.Group>
            <Button
              style={ submitStyle }
              variant="primary"
              type="submit"
            >
              Submit
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

export default connect(
  ({ auth, messages }) => ({
    token: auth.login.token,
    messages_failed: messages.messages_failed
  }),
  { handleKweetSubmit }
)(KweetInput)