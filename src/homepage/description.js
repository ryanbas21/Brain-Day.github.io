import Inferno from 'inferno';
import { Link } from 'inferno-router';

const Desc = () =>
        <article>

          <div class="center-text">
          <p> Brainfreeze started out as an Angular2 state management service.
             We created a few methods out of the box that we found useful outside of just
             Angular2 development
           </p>
          <p> We then decided to release not only an angular2 state management service,
              but also packed the functionality together to release redux middleware
          </p>
          <p> We can be found on github, and on npm. Documentation can be found in readme files on
             <a href='https://github.com/Brain-Day/brain-freeze/blob/master/README.md'> Github </a>
            or on the  <a><Link to="/docs">Documentation</Link></a>
        </p>
          </div>

        </article>
export default Desc;
