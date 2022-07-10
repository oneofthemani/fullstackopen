import logo from './logo.svg';
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

const App = (props) => {
  const { counter } = props;
  return (
    <div>{counter}</div>
  )
}

export default App;
