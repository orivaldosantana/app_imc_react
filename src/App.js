import './App.css';
import React, {Component} from 'react';
import IMCHeader from './components/Header';

class App extends Component {

  render(){
    return (
      <div>
        <IMCHeader title="Cálculo do IMC"/>
      </div>
    );
  }
}

export default App;
