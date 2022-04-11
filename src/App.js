import './App.css';
import React, {Component} from 'react';
import IMCHeader from './components/Header';
import IMCForm from './components/Form';

class App extends Component {

  render(){
    return (
      <div>
        <IMCHeader title="Cálculo do IMC"/>
        <IMCForm />
      </div>
    );
  }
}

export default App;
