import Inferno from 'inferno';

const Documentation = () =>
  <div className='documentation-container'>
    <article>
      <h1>Documentation</h1>
      <div>
        <h2>Overview</h2>
        <p>
          Brainfreeze takes advantage of redux architecture. That means that a lot of how Brainfreeze works is very similar to how redux, or a redux-like library works. The basic structure of Brainfreeze follows the dispatch an action => reducer => update/change state => return a new state.
        </p>
        <p>
          Brainfreeze still follows the functional approach that redux follows, we feel that is an appropriate approach to state containers.
        </p>
        <p><strong>Where does Brainfreeze differentiate itself?</strong></p>
        <p>
          Brainfreeze saw an issue where as applications scaled, the amount of 'listeners' on the page that were reacting to a state change could become taxing on performence. Brainfreeze focuses on the developer gaining more control over the their application state. We allow for this by creating a flattened state model that is able to create a mapping of the state object. By doing this we allow specific pieces of state to map to their specific listener. The listener now will only react to the changes that are neccessary to them when state is set.
        </p>
        <p>
          Doing this, we also enabled middleware functionality for more control over the state object. By creating this model, we set out create less business logic needed in the reducers and create more room for the developer to code what they want to code, and let the library hash out the unwanted logic. We are excited to dive into the depths of what Brainfreeze can do.
        </p>
      </div>

      <div>
        <h3  id='api-reference'>API REFERENCE</h3>
        <blockquote> Brainfreeze aims to provide a familiar and predictable state container.</blockquote>
      </div>
      <ul>
        <li className='no-bullet docs-code'><blockquote>Installation
        <code className='npm-space'>npm i brain-freeze --save</code></blockquote>
        </li>
        <li className='no-bullet docs-code' id='combine-reducer'>
          <dt>CombineReducers [optional:action.types:string] : Void</dt>
          <blockquote>Adds reducers to be run on state on invocation of dispatch.
                  The reducer object should take the same shape as the state object.
              </blockquote>

        </li>
        <li className='no-bullet docs-code' id='get-state'>
          <dt>Get State : Object</dt>
          <blockquote>Object returns state</blockquote>

        </li>
        <li className='no-bullet docs-code' id='dispatch'>
          <dt>Dispatch : Object </dt>
          <blockquote>Takes in action objects and checks for lock related commands (see locked state) before running state through reducers.</blockquote>

        </li>
        <li className='no-bullet docs-code' id='subscribe'>
          <dt>Subscribe : Function </dt>
          <blockquote> Subscribes a listener function to state changes (globally or to a specific key path)
               and returns a function to unsubscribe the same listener function.
               In order to subscribe to a specific key path, the developer must pass in a second argument after the listener,
               that is the key path within the state object, as a string. This must be done in dot notation, even with arrays.
               See example below.</blockquote>
        </li>
      </ul>
      <ul>
        <li className='no-bullet docs-code'>
          <ul className='no-bullet'>
            <li> <dt><h1 id='actions' className='title-doc' >Actions</h1></dt> </li>
            <li> <blockquote>
              Actions are generally made by the developer. These are strings that are dispatched to a reducer,
                        that tells the reducer what to do. Brain-Freeze comes with a few of these out of the box to take
                        full advantage of what the library has to offer.
                    </blockquote>
            </li>
            <li className='no-bullet docs-code' id='locked-state'>
              <dt>Lock State</dt>
              <blockquote>
                By attaching a 'lockState' property to the action object upon dispatch, the dispatch method will lock the state
                          and refuse to change state until it recieves an action object with the 'unlockState' property. If the
                           dispatch method sees the 'lockState' or 'unlockState' property it will lock or unlock state respectively,
                          and then exit.
                      </blockquote>
            </li>
            <li className='no-bullet docs-code' id='lock-specific-key-paths'>
              <dt>Locking Specific Key Paths</dt>
              <blockquote>
                Locking specific keys gives the developer the ability to make pieces of state immuttable.
                             This is done by dispatching an action, called 'lockKeys'. If an action is dispatched to this key while it's leave of state is locked, the action will be intercepted and the change will not occur
                             In certain modes, like dev-mode, the console will log out that the key is locked, and will give the developer
                             some feedback.
                        </blockquote>

            </li>
          </ul>
        </li>
      </ul>
      <h1 className='title-doc'>Under The Hood</h1>
      <ul>
        <li className='no-bullet docs-code' id='get-all-keys'>
          <dt>Get All Keys : Function </dt>
          <blockquote>Returns flattened object from nested object.</blockquote>

        </li>
        <li className='no-bullet docs-code' id='key-paths-changed'>
          <dt>Key Paths Changed : Function </dt>
          <blockquote>Returns array of keys from obj1 that are not the same in obj2. Will not return keys from obj2 that are not in obj1.</blockquote>

        </li>
        <li className='no-bullet docs-code' id='save-history'>
          <dt>Save History : Function </dt>
          <blockquote>Saves a history of state in the form of an array of deep cloned, deep frozen copies.</blockquote>

        </li>
      </ul>
    </article>
  </div>


export default Documentation
