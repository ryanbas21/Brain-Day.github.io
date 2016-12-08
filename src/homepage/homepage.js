import Inferno from 'inferno';
import Component from 'inferno-component';
import Desc from './description';
import NavBar from '../navbar';

const IndexComponent = () =>
      <div>
        <NavBar />
        <h1 className='center-homepage'>BrainFreeze</h1>
        <div>
         <Desc />
        </div>
      </div>

export default IndexComponent
