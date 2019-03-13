import React, { Component } from 'react'
import { ProfileBox, Timeline } from '.'

class HomePage extends Component {
    componentDidMount() {
        
    }

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
