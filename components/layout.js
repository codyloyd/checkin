import Head from 'next/head'
import React from 'react'
import Header from './header'

class Layout extends React.Component {
  render () {
    return (
      <div>
        <Head>
          <title>CHECKIT✔️</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width, maximum-scale=1.0, user-scalable=0"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <link rel="stylesheet" href="../static/style.css" />
          <link rel="icon" href="../static/favicon.ico" />
        </Head>
        <Header />
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Layout
