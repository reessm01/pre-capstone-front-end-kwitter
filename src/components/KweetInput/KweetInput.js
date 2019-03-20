import React, { Component } from "react"
import { connect } from "react-redux"
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { handleKweetSubmit } from "../../actions"
import { errorStyle, submitStyle, cardStyle } from "./style"

class KweetInput extends Component {
  state = {
    text: ""
  }

  handleSubmit = e => {
    const { handleKweetSubmit, token } = this.props

    e.preventDefault()
    handleKweetSubmit({ text: this.state, token })
    this.setState({ text: "" })
  }

  render() {
    const { handleSubmit } = this

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
                onChange={e => this.setState({ text: e.target.value })}
                value={this.state.text}
                name="kweet"
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

export default connect(
  ({ auth, messages }) => ({
    token: auth.login.token,
    messages_failed: messages.messages_failed
  }),
  { handleKweetSubmit }
)(KweetInput)
