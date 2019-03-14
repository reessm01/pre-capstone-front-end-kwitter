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

<<<<<<< HEAD
    handleSubmit = (e) => {
        e.preventDefault()

        const { handleKweetSubmit } = this.props
        const { value } = this.state

        handleKweetSubmit({ text: value })
=======
    handleSubmit = e => {
        const { handleKweetSubmit, token } = this.props

        e.preventDefault()
        handleKweetSubmit({ text: this.state, token})
>>>>>>> 9b3dc4ac8df8df01d455eac5eb92d51ba170a5d4

        e.target.value = ''
        
    }

    render() {
        const { handleSubmit} = this

        return (
            <React.Fragment>
                <Card bg="primary" variant="dark" style={{ padding: '2rem' }}>
<<<<<<< HEAD
                    <Form onSubmit={ handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
=======
                    <Form onSubmit={ handleSubmit }>
                        <Form.Group>
>>>>>>> 9b3dc4ac8df8df01d455eac5eb92d51ba170a5d4
                            <Form.Label>Kweet</Form.Label>
                            <Form.Control
                                onChange={ (e) => this.setState({ text: e.target.value }) }
                                name="kweet"
                                type="text"
                                placeholder="What are you thinking about?"
                                autocomplete="off"
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
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