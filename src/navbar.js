import Inferno from 'inferno';
import { Link } from 'inferno-router';

 const NavBar = () =>
      <div>
        <Link to="/">Home</Link>
        <Link to="/docs">Documentation</Link>
        <Link to='/demo'>Demo</Link>
      </div>

export default NavBar
