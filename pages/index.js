import Layout from '../components/layout'
import TeamList from '../components/teamlist'
// import Fb from '../lib/firebase'
// import firebase from 'firebase'

const Title = ({title}) => <h1>{title}</h1>

export default () => {
  return (
  <Layout>
    <Title title="Dashboard" />
    <TeamList />
  </Layout>
  )
}

