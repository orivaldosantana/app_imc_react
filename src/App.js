import React, { Component } from 'react';
import IMCForm from './components/form';
import Display from './components/Display';
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
  }

  render(){
   return (
      <div>
        <h1> APP - IMC!   </h1>   
        <Display imc={this.state.imc} />
        <IMCForm />
      </div>
    );
  }
}