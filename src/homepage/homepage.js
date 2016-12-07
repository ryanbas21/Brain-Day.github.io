import Inferno from 'inferno';
import Component from 'inferno-component';
import Desc from './description';
import NavBar from '../navbar';
export default class IndexComponent extends Component {
  constructor (){
    super()
    //defining state incase it's needed
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <NavBar />
        <h1>BrainFreeze</h1>
        <Desc />
      </div>
    )
  }
}
