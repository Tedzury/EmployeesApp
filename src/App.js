import logo from './logo.svg';
import './App.css';
import {Component} from 'react';

const Header = () => {
  return (<h2>Hello world</h2>)
}



class Field extends Component {
  render() {
    const holder = 'Enter Here !';
    const styledField = {
      width: '300px',
      height: '50px',
      backgroundColor: 'red',
      opacity: 0.5,
    };
    return (<input placeholder={holder} type='text' style={styledField}/>)
  }
  
}

function Btn() {
  const text = 'Log in!'
  const logged = false;
  return (<button>{logged ? 'Enter' : text}</button>)
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Field/>
      <Btn/>
    </div>
  );
}

export default App;
export {Header};
