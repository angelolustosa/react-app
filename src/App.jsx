import { useState } from 'react';
import './App.css'
import { Coleguinha } from './components/coleguinha/Coleguinha.jsx'

function App() {
  const [nome, setNome] = useState('Angelo');

  console.log('app.jsx', nome);

  const alunos = [
    {
      nome: 'Alberto',
      nome_completo: 'Alberto Wowtilla Silva Galdino'
    },
    {
      nome: 'Breno',
      nome_completo: 'Breno Aragão Araújo Lima'
    },
    {
      nome: 'Rômulo',
      nome_completo: 'Rômulo da Rocha Teixeira'
    },
  ]


  return (
    <>
      <h1>Lista de Alunos da FS36</h1>


      <p>TESTE</p>
      <Coleguinha
        nome="Angelo"
        idade={28}
        nomeCompleto="Angelo Lustosa de Figueiredo Filho" />
      <Coleguinha
        nome="Alberto"
        idade={37}
        nomeCompleto="Alberto Wowtilla" />
      <Coleguinha
        nome="Miguel"
        idade={20}
        nomeCompleto="Miguel Alves Pires de Oliveira"
      />
      <Coleguinha />
      <Coleguinha />
      <Coleguinha />

      {/* <h3>Angelo</h3>
      <p>Angelo Lustosa de Figueiredo Filho</p>

      <h3>Alberto</h3>
      <p>Alberto Wowtilla</p> */}

      {/* <h3>Miguel</h3>
      <p>Miguel Alves Pires de Oliveira</p> */}
    </>
  )
}

export default App
