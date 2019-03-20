import React, { Component } from "react"
import { TimelinePost } from "../"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class Timeline extends Component {
  state = {
    messages: []
  }

  render() {
    const timeLinePosts = this.props.messages.map((message, index) => (
      <TimelinePost key={ index } text={ message.text } id={ message.userId } />
    ))

    return (
        <div id="timeline-posts">
          <ReactCSSTransitionGroup
            transitionName="fade"
            transitionEnter={true}
            transitionEnterTimeout={2000}
            transitionLeave={true}
            transitionLeaveTimeout={300}
            transitionAppear={false}
            transitionAppearTimeout={2000}
          >
            { timeLinePosts }
          </ReactCSSTransitionGroup>
        </div>
    )
  }
}