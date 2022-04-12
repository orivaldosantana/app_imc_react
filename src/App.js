import './App.css';
import React, {Component} from 'react';
import IMCHeader from './components/Header';
import IMCForm from './components/Form';

class App extends Component {
  constructor(props){
    super(props); 
    this.state = {imc: 0}; 

    this.handleIMCChange = this.handleIMCChange.bind(this); 
  }

  handleIMCChange(imc){
    this.setState({imc});  
  }

  render(){
    console.log("Render APP:\n IMC = "+this.state.imc);  

    return (
      <div>
        <IMCHeader title="Cálculo do IMC"/>
        <IMCForm  onIMCChange={this.handleIMCChange} />
      </div>
    );
  }
}

export default App;
