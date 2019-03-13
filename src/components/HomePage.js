import React, { Component } from 'react'
import { ProfileBox, Timeline } from '.'
import GeneralHeader from "./GeneralHeader"

class HomePage extends Component {
    componentDidMount() {
        
    }

    render() {
        return (
        <React.Fragment>
            <GeneralHeader />
            <div id="main-wrap">
                <ProfileBox />
                <Timeline />
            </div>
        </React.Fragment>
        )
    }
}

export default HomePage
