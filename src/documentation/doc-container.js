import Inferno from 'inferno';
import Component from 'inferno-component';
import Documentation from './Documentation'
import NavBar from '../navbar';
import SideNav from './side-nav';
const Docs = () =>
      <div className='pagination-center-example'>
        <NavBar className="callout secondary"/>
          <div className='small-2 columns callout secondary'>
            <SideNav/>
          </div>
          <div className='large-6 columns'>
          <Documentation className='small-8 columns'/>
          </div>
          <div className='large-3 columns'> </div>
      </div>

export default Docs
