import Inferno from 'inferno'
import Component from 'inferno-component'
import Desc from './description'
import NavBar from '../navbar'

const IndexComponent = () =>
  <div>
    <NavBar />
    <div className="homepage-container">
      <h1>Brainfreeze</h1>
      <Desc />
    </div>
  </div>

export default IndexComponent
