import Layout from '../components/layout'
import Fb from '../lib/firebase'

export default () => {
return (
<Layout>
  <button onClick={() => Fb.auth.signIn()} >signin</button>
  <button onClick={() => Fb.auth.signOut()} >signout</button>
  <h1>Index Page</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sint officia cumque quas soluta, quae earum ea, quam exercitationem saepe veritatis fuga voluptatum dolor animi nesciunt voluptas eaque, consectetur porro!</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sint officia cumque quas soluta, quae earum ea, quam exercitationem saepe veritatis fuga voluptatum dolor animi nesciunt voluptas eaque, consectetur porro!</p>  
</Layout>
)}