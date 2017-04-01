import React from 'react'

export default props => {
  return (
    <div>
      <div className="hero is-primary is-medium">
        <div className="hero-body">
          <div className="container">
            <p className="title">WELCOME TO CHECKIT</p>
            <p className="subtitle">SCRUM meetings without the meetings</p>
            <p>Sign in with GitHub to begin</p>
          </div>
        </div>
      </div>
      <div className="column is-8 is-offset-1">
        <div className="section">
          <p className="title">About This Project</p>
          <div className="content">
            <p>
              CheckIt was created by Cody Loyd and Thoragio.  The original inspiration came from a project suggested by Eric Elliott
              {' '}
              <a href="https://github.com/learn-javascript-courses/checkin">
                here.
              </a>
            </p>
            <p>
              The basic concept was to use React to create an app where users can create and join teams, and then do daily 'CheckIns' where they answer the 3 questions you would normally hear in a SCRUM stand-up meeting:
            </p>
            <ul>
              <li>What did you do on the last workday?</li>
              <li>What are you doing today?</li>
              <li>Is there anything blocking you?</li>
            </ul>
            <p>
              The bulk of the work was done in February of 2017.  You can find the github repo
              {' '}
              <a href="https://github.com/codyloyd/checkin">here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
