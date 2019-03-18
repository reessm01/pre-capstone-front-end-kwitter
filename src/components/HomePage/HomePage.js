import React, { Component } from 'react'
import { ProfileBox, Timeline, UsersSidebar, GeneralHeader } from '../'

class HomePage extends Component {

    render() {
        return (
            <React.Fragment>
                <GeneralHeader />
                <div id="main-wrap">
                    <div className="profile-mobile wrap">
                        <ProfileBox className="mobile" />
                    </div>
                    <div className="wrap">
                        <Timeline />
                    </div>
                    <div className="users-mobile wrap">
                        <UsersSidebar className="mobile" />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default HomePage