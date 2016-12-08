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
      <div className='pagination-center-example'>
        <NavBar className="callout secondary"/>
        <div class="row">
          <div className='small-9 columns'></div>
          <Documentation className='small-8 columns '/>
        </div>

      </div>
    )
  }
}
