import Inferno from 'inferno';
import { Link } from 'inferno-router';

const NavBar = () =>
  <nav>
    <ul className="topnav">
      <li>
        <Link to="/">Home</Link></li>
      <li>
        <Link to="/docs">Documentation</Link></li>
      <li>
        <Link to="/demo">Demo</Link></li>
      <li>
        <a href="https://www.github.com/Brain-Day/brain-freeze">GitHub</a></li>
    </ul>
  </nav>

export default NavBar
