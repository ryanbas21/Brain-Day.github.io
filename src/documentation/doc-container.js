import Inferno from 'inferno'
import Component from 'inferno-component'
import Documentation from './Documentation'
import NavBar from '../navbar'
import SideNav from './side-nav'

const Docs = () =>
  <div>
    
    <NavBar />
    <div>
        <SideNav />
    </div>

    <div>
      <Documentation />
    </div>

  </div>

export default Docs
