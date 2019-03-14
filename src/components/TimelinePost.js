import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'
import { domain, handleJsonResponse } from "../actions/constants"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

library.add(faHeart)

const url = domain + '/users/'

const cardStyle = {
  width: '100%'
}

const postHeaderStyle = {
  display: 'flex',
  marginBottom: '1rem'
}

const cardImgStyle = { 
  height: '3rem',
  width: '3rem',
  marginRight: '1rem'
}

const namesDivStyle = {
  display: 'flex',
  flexDirection: 'column'
}

export default class TimelinePost extends Component{
  state = {
    displayName: '',
    username: '',
    photoUrl: 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fmybroadband.co.za%2Fnews%2Fwp-content%2Fuploads%2F2017%2F04%2FTwitter-profile-picture.jpg&f=1'
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
    
    fetch(url + this.props.id + '/picture')
      .then(result => {
        if(result.status === 200) {
          this.setState({
            photoUrl: result.url
          })
        }
      })
  }

  render(){
    const {
      displayName,
      username,
      photoUrl
    } = this.state

    const { text } = this.props

    return(
      <Card style={ cardStyle }>
        <Card.Body>
          <div style={ postHeaderStyle }>
            <Card.Img style={ cardImgStyle } src={ photoUrl }></Card.Img>
            <div style={ namesDivStyle }>
              <Card.Title>{ displayName }</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">@{ username }</Card.Subtitle>
            </div>
          </div>
          <Card.Text>
            { text }
          </Card.Text>
          <Card.Link href="#"><FontAwesomeIcon icon="heart"></FontAwesomeIcon></Card.Link>
          <Card.Link href="#">Dislike</Card.Link>
        </Card.Body>
      </Card>
    )
  } 
}