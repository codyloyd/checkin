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
      <div>
        <nav className='nav has-shadow'>
          <div className="container">
            <div className="nav-left">
              <div className="nav-item">
                <p className='title'>CheckIt</p>
              </div>
            </div>
            <div className="nav-right">
              <div className="nav-item">
                <a href="" className="is-primary button is-hidden-desktop is-hidden-tablet">menu</a>
              </div>
            </div>
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
    <div className='nav-right'>
      <span className="nav-item">
        <a className="button is-primary" onClick={() => auth.signIn()}>sign in</a>
      </span>
    </div>
    )
  }
  return (
    <div className='nav-right nav-menu'>
      <Link href="/"><a className='nav-item'>Dashboard</a></Link>
      <Link href="/newTeam"><a className='nav-item'>New Team</a></Link>
      <Link href="/joinTeam"><a className='nav-item'>Join Team</a></Link>
      <span className="nav-item">
        <a className="button is-primary" onClick={() => auth.signOut()}>signout</a>
      </span>
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
            z-index: 1;
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
