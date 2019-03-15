import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { handleKweetSubmit } from "../actions"

class KweetInput extends Component {
    state = {
        text: ''
    }

    handleSubmit = e => {
        const { handleKweetSubmit, token } = this.props

        e.preventDefault()
        handleKweetSubmit({ text: this.state, token})

        e.target.value = ''
    }

    render() {
        const { handleSubmit } = this

        return (
            <React.Fragment>
                <Card bg="primary" variant="dark" style={{ padding: '2rem' }}>
                    <Form onSubmit={ handleSubmit }>
                        <Form.Group>
                            <Form.Control
                                onChange={ (e) => this.setState({ text: e.target.value }) }
                                name="kweet"
                                type="textarea"
                                placeholder="What are you thinking about?"
                                autocomplete="off"
                            />
                        </Form.Group>
                        <Button style={{ color: 'black', backgroundColor: '#DCDCDC' }} variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>    
                </Card>
            </React.Fragment>
        )
    }
}

export default connect(
    ({ auth }) => ({
        token: auth.login.token
    }),
    { handleKweetSubmit }
)(KweetInput)