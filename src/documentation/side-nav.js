import Inferno from 'inferno'

const SideNav = () =>
  <nav>
    <ul className="sidenav">
      <li>
        <a href='#api-reference'>API REFERENCE</a></li>
      <li>
        <a href="#combine-reducer">CombineReducers</a></li>
      <li>
        <a href="#get-state">Get State</a></li>
      <li>
        <a href="#dispatch">Dispatch</a></li>
      <li>
        <a href="#subscribe">Subscribe</a></li>
      <li>
        <a href='#actions'>Actions</a></li>
      <li>
        <a href='#lock-specific-key-paths'>Lock Key Paths</a></li>
      <li>
        <a href="#locked-state">Lock State</a></li>
    </ul>
  </nav>

export default SideNav;
