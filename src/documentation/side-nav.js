import Inferno from 'inferno';

const SideNav = () =>
<ul className="side-nav no-bullet" role='navigation' title="Link List">
        <li role='menuitem'className='divider'></li>
        <li role='menuitem'className='center-doc title'><a href='#api-reference'>API REFERENCE</a></li>
        <li role='menuitem'className='center-doc item'><a href="#combine-reducer">CombineReducers</a></li>
        <li role='menuitem' className='center-doc item'><a href="#get-state">Get State</a></li>
        <li role='menuitem'className='center-doc item'><a href="#dispatch">Dispatch</a></li>
        <li role='menuitem'className='center-doc item'><a href="#subscribe">Subscribe</a></li>
        <li role='menuitem'className='divider'></li>
        <li role='menuitem'className='center-doc title'><a href='#actions'>Actions</a></li>
        <li role='menuitem'className='center-doc item'><a href='#lock-specific-key-paths'>Lock Key Paths</a></li>
        <li role='menuitem'className='center-doc item'><a href="#locked-state">Lock State</a></li>

</ul>

export default SideNav;
