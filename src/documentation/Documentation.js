import Inferno from 'inferno';

const Documentation = () =>
    <div>
      <h1 className='electro-font'>API Reference </h1>
        <article>
          <ul>
            <li className='no-bullet docs-code' id='add-reducer'>
              <dt>Add Reducer : Void</dt>
              <blockquote>Adds reducers to be run on state on invokation of dispatch.</blockquote>
              <code>writing some code here</code>
            </li>
            <li className='no-bullet docs-code' id='get-state'>
                <dt>Get State : Object</dt>
                <blockquote>Object Returns a deep clone of state.</blockquote>
                <code>code goes here</code>
            </li>
            <li className='no-bullet docs-code' id='dispatch'>
              <dt>Dispatch : Object </dt>
              <blockquote>Takes in action objects and checks for lock related commands before running state through reducers.</blockquote>
            </li>
            <li className='no-bullet docs-code' id='subscribe'>
              <dt>Subscribe : Function </dt>
              <blockquote>Subscribes a listener function to state changes and returns a function to unsubscribe the same listener function.</blockquote>
              <code>code goes here</code>
            </li>
          </ul>
          </article>
    </div>


export default Documentation
