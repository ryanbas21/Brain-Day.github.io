import Inferno from 'inferno';
import Component from 'inferno-component';
import Desc from './description';
import NavBar from '../navbar';

const IndexComponent = () =>
      <div>
        <NavBar />
        <h1>BrainFreeze</h1>
        <blockquote className='center-this-div'><Desc /></blockquote>
      </div>

export default IndexComponent
