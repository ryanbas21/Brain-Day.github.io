// inferno module
import Inferno from 'inferno';
// routing modules
import { Router, Route } from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';

// app components
import IndexComponent from './homepage/homepage';
import Docs from './documentation/doc-container';
import Demo from './demo/demo';
require('../public/styles.css');
const browserHistory = createBrowserHistory();

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={IndexComponent} />
    <Route path='/docs' component={Docs} />
    <Route path='/demo' component={Demo} />
  </Router>
);
Inferno.render(routes, document.getElementById('app'));
