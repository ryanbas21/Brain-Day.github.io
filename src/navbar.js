import Inferno from 'inferno';
import { Link } from 'inferno-router';

 const NavBar = () =>
      <nav className='nav-nav-height' data-magellan data-sticky data-margin-top="0">
       <ul className="horizontal menu callout secondary" data-sticky-on="large" data-magellan>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/docs">Documentation</Link></li>
        <li><Link to='/demo'>Demo</Link></li>
        <li><Link to='www.github.com/Brain-Day/brain-freeze' /><i className='fi-social-github'></i></li>

        </ul>
        <ul classname='no-bullets align-right'>
        </ul>
      </nav>

export default NavBar
