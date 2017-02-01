import Link from 'next/link'
import Head from 'next/head'
import Header from './header'

export default ({ children, title = 'Check In!' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <div className="container">
      <Header />
      { children }
    </div>
  <style>{`
  body {
    background: #DDFFDC;
    font-family: Arial, Helvetica, Sans;
  }
  .container {
    max-width: 800px;
    margin: 0 auto;
  }
  `}</style>
  </div>
)
