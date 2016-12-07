import Inferno from 'inferno';
import Component from 'inferno-component';
import NavBar from '../navbar';


class Demo extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <NavBar />
        <div>Demos to come...</div>
      </div>
    )
  }
}

export default Demo;
