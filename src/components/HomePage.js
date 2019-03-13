import React, { Component } from 'react'
import { ProfileBox, Timeline } from '.'

class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <ProfileBox />
        <Timeline />
      </React.Fragment>
    )
  }
}

export default HomePage
