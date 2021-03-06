import React, { Component } from 'react';

import './App.css'


import IMCForm from './components/form';
import Display from './components/Display';
import IMCHeader from './components/Header';

/*
Estrutura geral do APP - Rascunho 
- Um Display: recebe o resultado do calculo do IMC
  Pode usar uma função local passada para o componente formulário para 
  atualizar o estado a ser apresentado no display 
- Um Formulário: coleta os dados digitados pelo usuário 
  Possui entrada para a massa e a aultura
  Usar o evento onChange para atualizar os dados do formulário 
  Ligar a função que trata do evento onClick com a função presente no APP principal que atualizar o display 
- Um cabeçalho: Apenas para exibir nome do App 
*/


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {imc: '0'};

    this.handleIMCChange = this.handleIMCChange.bind(this);
  }

  handleIMCChange(imc){
    this.setState( {imc} )
  }

  render(){
    const newIMC = this.state.imc; 
    return (
      <div>
        <IMCHeader title="APP - IMC" />   
        <Display imc={newIMC} />
        <IMCForm onIMCChange={this.handleIMCChange} />
      </div>
    );
  }
}