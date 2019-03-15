import React, { Component } from 'react'
import { connect } from "react-redux"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { setCurrentUserInfo, editUser } from "../../actions"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

library.add(faEdit)

const cardStyle = {
    width: '18rem',
    height: 'fit-content',
    padding: '2rem',
    backgroundColor: "#DCDCDC"
}

class ProfileBox extends Component {
    state = {
        edit: false
    }

    componentDidMount() {
        this.props.setCurrentUserInfo(this.props.id)
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleEdit = e => {
        const { displayName, password, about, edit } = this.state

        this.setState({ edit: !edit })

    
        e.preventDefault()
        this.props.editUser({
            editData: { displayName, password, about },
            token: this.props.token,
        })
    
    }

    render() {
        const { handleChange, handleEdit } = this
        const { displayName, username, bio } = this.props
        const { edit } = this.state

        return (
            <Card style={ cardStyle }>
                <Card.Img variant="top" src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcbsnews1.cbsistatic.com%2Fhub%2Fi%2Fr%2F2016%2F06%2F03%2F1f114c6d-755e-43e4-a8ca-e81854536eef%2Fthumbnail%2F1200x630%2F3105ee7ea685d1c452f01853ebd94310%2Fanthony-zingale.jpg&f=1" />
                {edit ?
                    <Form onSubmit={ handleEdit } style={{ marginTop: '30px' }}>
                        <Form.Group controlId="displayName">
                            <Form.Label>Display Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="displayName"
                                placeholder={ displayName }
                                onChange={ handleChange }
                            />
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="text"
                                name="password"
                                placeholder="password"
                                onChange={ handleChange }
                            />
                        </Form.Group>
                        <Form.Group controlId="bio">
                            <Form.Label>Bio</Form.Label>
                            <Form.Control
                                name="about"
                                maxlength="100"
                                as="textarea"
                                rows="3"
                                placeholder={ bio }
                                onChange={ handleChange }
                            />
                        </Form.Group>
                        <Button type="submit" style={{ marginBottom: "30px" }}>Save</Button>
                    </Form>
                :
                    <Card.Body>
                        <Card.Title style={{ fontSize: '2rem', marginBottom: '0px' }}>{ displayName }</Card.Title>
                        <small>@{ username }</small>
                        <Card.Text style={{ marginTop: '1rem', marginBottom: '1rem' }}>
                            { bio }
                        </Card.Text>
                        <Button onClick={ () => this.setState({ edit: !edit }) }>
                            <FontAwesomeIcon icon="edit"></FontAwesomeIcon>
                        </Button>
                    </Card.Body>
                }
            </Card>
        )
  }
}

export default connect(
    ({ auth, currentUser }) => ({
        id: auth.login.id,
        token: auth.login.token,
        displayName: currentUser.displayName,
        username: currentUser.username,
        bio: currentUser.bio
    }),
    { setCurrentUserInfo, editUser }
)(ProfileBox)