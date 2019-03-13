import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'
import { domain, handleJsonResponse } from "../actions/constants"

const url = domain + '/users/'

export default class TimelinePost extends Component{
  state = {
    displayName: '',
    username: ''
  }

  componentDidMount() {
    fetch(url + this.props.id)
      .then(handleJsonResponse)
      .then(result => {
        this.setState({
          displayName: result.user.displayName,
          username: result.user.displayName,
        })
      })
  }

  render(){
      return(
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{this.state.displayName}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">@{this.state.username}</Card.Subtitle>
          <Card.Text>
            {this.props.text}
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    )
  } 
}