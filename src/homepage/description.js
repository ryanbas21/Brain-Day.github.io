import Inferno from 'inferno';
import { Link } from 'inferno-router';

const Desc = () =>
  <article>
    <div>
      <p>
        Hello, from Team Brain Day, thanks for visiting.
      </p>
      <p>
        Brainfreeze started out as an Angular 2 state management service. We wanted to create a Redux alternative, that was simple to use in Angular 2. However we found that the more we wrote out the library we found issues that we wanted to solve that we related how we saw Redux being used a approach to Angular 2 development while, the original library was written as a service, in TypeScript, we have made a full conversion to Vanilla JS, as well as the TypeScript version. These versions are identical, you may find the TypeScript source easier to read through because of the type-checking.
      </p>
      <p>
        We encourage you to read through the documentation to get a feel as to how Brainfreeze differentiates itself from the cloud of redux, and how it can add some impact into your application.
      </p>
      <p>
        Documentation can be found in readme files on
        <a href='https://github.com/Brain-Day/brain-freeze/blob/master/README.md'> Github </a>
        or on the <a><Link to="/docs">Docs</Link></a>.
      </p>
    </div>
  </article>

export default Desc;
