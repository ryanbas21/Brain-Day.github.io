import Inferno from 'inferno';
import { Link } from 'inferno-router';

 const NavBar = () =>
      <nav>
       <ul className="horizontal menu callout secondary">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/docs">Documentation</Link></li>
        <li><Link to='/demo'>Demo</Link></li>
        </ul>
      </nav>

export default NavBar
