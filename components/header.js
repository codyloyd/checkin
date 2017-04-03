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
    firebase
      .auth()
      .onAuthStateChanged(user => {
        if (user) {
          this.setState({currentUser: user})
        } else {
          this.setState({currentUser: null})
        }
      })
      .bind(this)
  }
  toggleMobileMenu () {
    this.setState({mobileMenuVisible: !this.state.mobileMenuVisible})
  }
  render () {
    return (
      <div>
        <nav className="nav has-shadow">
          <div className="nav-left">
            <div className="nav-item">
              <p className="title">CheckIt</p>
            </div>
          </div>
          <MenuButton
            currentUser={this.state.currentUser}
            menuClick={e => {
              this.toggleMobileMenu()
            }}
          />
          <HeaderMenu currentUser={this.state.currentUser} />
        </nav>

        <MobileMenu
          visibility={this.state.mobileMenuVisible}
          toggleMenu={this.toggleMobileMenu}
          currentUser={this.state.currentUser}
        />
      </div>
    )
  }
}

const MenuButton = ({currentUser, menuClick}) => {
  if (currentUser) {
    return (
      <div className="nav-right">
        <div className="nav-item">
          <a
            href=""
            onClick={e => {
              e.preventDefault()
              menuClick()
            }}
            className="is-primary button is-hidden-desktop is-hidden-tablet"
          >
            menu
          </a>
        </div>
      </div>
    )
  } else {
    return <div />
  }
}

const HeaderMenu = ({currentUser, menuClick}) => {
  if (!currentUser) {
    return (
      <div className="nav-right">
        <span className="nav-item">
          <a className="button is-primary" onClick={() => auth.signIn()}>
            sign in with GitHub
          </a>
        </span>
      </div>
    )
  }
  return (
    <div className="nav-right nav-menu">
      <Link href="/"><a className="nav-item">Dashboard</a></Link>
      <Link href="/newTeam"><a className="nav-item">New Team</a></Link>
      <Link href="/joinTeam"><a className="nav-item">Join Team</a></Link>
      <span className="nav-item">
        <a className="button is-primary" onClick={() => auth.signOut()}>
          signout
        </a>
      </span>
    </div>
  )
};

const MobileMenu = ({visibility, currentUser, toggleMenu}) => {
  if (visibility) {
    return (
      <div className="hero is-primary">
        <div className="hero-body">
          <MobileMenuContents
            currentUser={currentUser}
            toggleMenu={toggleMenu}
          />
        </div>
      </div>
    )
  } else {
    return <div />
  }
}

const MobileMenuContents = ({currentUser, toggleMenu}) => {
  if (currentUser) {
    return (
      <div className="level">
        <Link href="/"><a className="title level-item">Dashboard</a></Link>
        <Link href="/newTeam">
          <a className="title level-item">New Team</a>
        </Link>
        <Link href="/joinTeam">
          <a className="title level-item">Join Team</a>
        </Link>
        <a
          className="title level-item"
          onClick={() => {
            auth.signOut()
            toggleMenu()
          }}
        >
          Sign Out
        </a>
      </div>
    )
  } else {
    return (
      <div className="level">
        <a className="subtitle level-item" onClick={() => auth.signIn()}>
          Sign In
        </a>
      </div>
    )
  }
}
