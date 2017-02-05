import Layout from '../components/layout'

export default class extends React.Component {
  static async getInitialProps ({ req, query: { id } }) {
    console.log(id)
    return {id}
  } 
  render () {
    return (
      <Layout>
        <h1>Manage Team</h1>
        <p>teamID: {this.props.id}</p>
      </Layout>
    )
  }
}
