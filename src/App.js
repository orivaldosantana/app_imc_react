import './App.css';
import React, {Component} from 'react';
import IMCHeader from './components/Header';
import IMCForm from './components/Form';
import Result from './components/Result';

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
    
    const newIMC = this.state.imc;
    console.log("Render APP:\n IMC = "+newIMC);  
    return (
      <div>
        <IMCHeader title="Cálculo do IMC"/>
        <IMCForm  onIMCChange={this.handleIMCChange} />
        <Result imc={newIMC} />
      </div>
    );
  }
}

export default App;
