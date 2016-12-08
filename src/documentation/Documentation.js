import Inferno from 'inferno';

const Documentation = () =>
    <div>
      <h1>API Reference </h1>
        <article>
          <ul>
            <li className='no-bullet'>
              <dt>addReducer(reducer: Function): void</dt>
              <blockquote>Adds reducers to be run on state on invokation of dispatch.</blockquote>
            </li>
            <li className='no-bullet'>
                <dt> getState()</dt>
                <blockquote>Object Returns a deep clone of state.</blockquote>
            </li>
            <li className='no-bullet'>
              <dt>dispatch(action: Object): Object </dt>
              <blockquote>Takes in action objects and checks for lock related commands before running state through reducers.</blockquote>
            </li>
            <li className='no-bullet'>
              <dt>subscribe(fn: Function): Function </dt>
              <blockquote>Subscribes a listener function to state changes and returns a function to unsubscribe the same listener function.</blockquote>
            </li>
          </ul>
          </article>
    </div>


export default Documentation
