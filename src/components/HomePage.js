import React, { Component } from 'react'
import { ProfileBox, Timeline, UsersSidebar } from '.'

class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <ProfileBox />
        <Timeline />
        <UsersSidebar />
      </React.Fragment>
    )
  }
}

export default HomePage
