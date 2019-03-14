import React, { Component } from 'react'
import { ProfileBox, Timeline, UsersSidebar } from '.'
import GeneralHeader from "./GeneralHeader"

class HomePage extends Component {

    render() {
        return (
            <React.Fragment>
                <GeneralHeader />
                <div id="main-wrap">
                    <ProfileBox />
                    <Timeline />
                    <UsersSidebar />
                </div>
            </React.Fragment>
        )
    }
}

export default HomePage
