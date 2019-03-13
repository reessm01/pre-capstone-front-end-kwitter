import React, { Component } from 'react'
import { connect } from "react-redux"
import Card from "react-bootstrap/Card"
import { setCurrentUserInfo } from "../actions"

const cardStyle = {
    width: '25rem',
    height: 'fit-content',
    padding: '3rem'
}

class ProfileBox extends Component {
    componentDidMount() {
        this.props.setCurrentUserInfo(this.props.id)
    }

    render() {
        const { displayName, username, bio } = this.props

        return (
            <Card style={cardStyle}>
                <Card.Img variant="top" src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcbsnews1.cbsistatic.com%2Fhub%2Fi%2Fr%2F2016%2F06%2F03%2F1f114c6d-755e-43e4-a8ca-e81854536eef%2Fthumbnail%2F1200x630%2F3105ee7ea685d1c452f01853ebd94310%2Fanthony-zingale.jpg&f=1" />
                <Card.Body>
                    <Card.Title>{ displayName }</Card.Title>
                    <small>@{ username }</small>
                    <Card.Text>
                        { bio }
                    </Card.Text>
                </Card.Body>
            </Card>
        )
  }
}

export default connect(
    ({ auth, currentUser }) => ({
        id: auth.id,
        displayName: currentUser.displayName,
        username: currentUser.username,
        bio: currentUser.bio
    }),
    { setCurrentUserInfo }
)(ProfileBox)