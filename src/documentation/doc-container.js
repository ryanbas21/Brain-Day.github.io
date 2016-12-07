import Inferno from 'inferno';
import Component from 'inferno-component';
import Documentation from './Documentation'
import NavBar from '../navbar';

export default class Docs extends Component {
  constructor() {
    super()
  }
  render () {
    return (
      <div>
        <NavBar />
        <h1>hey</h1>
        <Documentation />
      </div>
    )
  }
}
