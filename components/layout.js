import Head from 'next/head'
import React from 'react'
import Header from './header'

export default({
  children,
  title = '✔️️CheckIt!'
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8'/>
      <meta name='viewport' content='initial-scale=1.0, width=device-width, maximum-scale=1.0, user-scalable=0'/>
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <link rel="shortcut icon" type="image/x-icon" href="../favicon.ico"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css" />
      <style>{`
        .extra-bold {
          font-weight: 600;
        }
      `}</style>
    </Head>
    <Header/>
    <div className="container">
      {children}
    </div>
  </div>
)
