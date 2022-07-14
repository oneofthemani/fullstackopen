import { useState } from 'react';

import './App.css';

//and this is called destructuring
const Hello = ({ name, age }) => {
  //const name = props.name; //for more comfort
  //const age = props.age; 
  //For more comfort, it is called destructuring

  //const { name, age }  = props;

  const bornYear = () => {
    const yearNow = new Date().getFullYear;
    return yearNow - props.age;
  }

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const myOwn = ({ something, nothing }) => {
  const funcInsideFunc = () => {
    return something + nothing;
  }

  return (
    <div>
      <p>
        All things are either {something} or {nothing}. When you add them, you get {funcInsideFunc()}
      </p>
    </div>
  )
}

const App = () => {
  const [ counter, setCounter ] = useState(0);

  const handleClick = () => {
    console.log('clicked');
  }

  setTimeout(
    () => setCounter(counter + 1),
    1000
  )
  //const { counter } = props;

  console.log('rendering...' , counter); //for debugging the code
  return (
    <div>
    <div>{counter}</div>
    <button onClick={() => setCounter(0)}>
      Push the zero button!
    </button>
    <button onClick={() => setCounter(counter + 1)}>
      push the button and make the counter 1 up!
    </button>
    <myOwn something={1} nothing={-1} />
      </div>
  )
}

export default App;
