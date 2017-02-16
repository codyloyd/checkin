import Link from 'next/link'
import React from 'react'

import {auth} from '../lib/firebase'
import firebase from 'firebase'

export default class extends React.Component {
  constructor () {
    super()
    this.state = {currentUser: null, mobileMenuVisible: false}
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this)
  }
  componentDidMount () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({currentUser: user})
      } else {
        this.setState({currentUser: null})
      }
    }).bind(this)
  }
  toggleMobileMenu () {
    this.setState({mobileMenuVisible: !this.state.mobileMenuVisible})
  }
  render () {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper blue">
            <div className="brand-logo"><i className="large material-icons">done</i>CheckIt</div>
              <HeaderMenu menuClick={() => this.toggleMobileMenu()} currentUser={this.state.currentUser}/>
          </div>
        </nav>
        <MobileMenu visibility={this.state.mobileMenuVisible} currentUser={this.state.currentUser}/>
      </div>
    )
  }
}

const HeaderMenu = ({currentUser, menuClick}) => {
  if (!currentUser) {
    return (
      <div>
      <a onClick={menuClick} className=" left dropdown-button hide-on-large-only">Menu<i className="material-icons left">arrow_drop_down</i></a>
        <ul className="right hide-on-med-and-down">
          <li><a className="btn green lighten-2 hoverable" onClick={() => auth.signIn()}>sign in with <span className='extra-bold'>GitHub</span></a></li>
        </ul>
      </div>
    )
  }
  return (
    <div>
      <a onClick={menuClick} className=" left dropdown-button hide-on-large-only">Menu<i className="material-icons left">arrow_drop_down</i></a>
      <ul className="right hide-on-med-and-down">
        <li><Link href="/"><a>Dashboard</a></Link></li>
        <li><Link href="/newTeam"><a>New Team</a></Link></li>
        <li><Link href="/joinTeam"><a>Join Team</a></Link></li>
        <li><a className="btn green lighten-2 hoverable" onClick={() => auth.signOut()}>signout</a></li>
      </ul>
    </div>
  )
}

const MobileMenu = ({visibility, currentUser}) => {
  if (visibility) {
    return (
      <div className="menu-container">
      <div className='mobile-menu z-depth-1'>
        <MobileMenuContents currentUser={currentUser} />
      </div>
        <style>{`
          .mobile-menu {
            background: white;
            width: 100%;
            top: 56px;
            position: fixed;
            z-index: -1;
          }
          .mobile-menu > .menu-contents > a {
            text-align: center;
            padding: 16px;
            color: black;
            display: block;
          }
        `}</style>
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}

const MobileMenuContents = ({currentUser}) => {
  if (currentUser) {
    return (
      <div className='menu-contents'>
        <Link href="/"><a>Dashboard</a></Link>
        <Link href="/newTeam"><a>New Team</a></Link>
        <Link href="/joinTeam"><a>Join Team</a></Link>
        <a className="" onClick={() => auth.signOut()}>Sign Out</a>
      </div>
    )
  } else {
    return (
      <div className='menu-contents'>
        <a className="" onClick={() => auth.signIn()}>Sign In</a>
      </div>
    )
  }
}
