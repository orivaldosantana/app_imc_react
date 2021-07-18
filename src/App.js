import React from 'react';

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


export default function App() {
    return (
        <div>
            Componente APP - IMC!!!      
        </div>
  );
}