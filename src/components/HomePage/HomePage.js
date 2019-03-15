import React, { Component } from 'react'
import { ProfileBox, Timeline, UsersSidebar, GeneralHeader } from '../'

class HomePage extends Component {

    render() {
        return (
            <React.Fragment>
                <GeneralHeader />
                <div id="main-wrap">
                    <div className="profile-mobile">
                        <ProfileBox className="mobile" />
                    </div>
                    <Timeline />
                    <div className="users-mobile">
                        <UsersSidebar className="mobile" />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default HomePage