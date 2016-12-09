import Inferno from 'inferno';
import Component from 'inferno-component';
import Documentation from './Documentation'
import NavBar from '../navbar';
import SideNav from './side-nav';
const Docs = () =>
      <div className='pagination-center-example'>
        <NavBar />
          <div className='small-2 columns callout secondary'>
            <SideNav/>
          </div>
          <div className='large-6 columns'>
          <Documentation/>
          </div>
          <div className='large-3 columns'> </div>
      </div>

export default Docs
