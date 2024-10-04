import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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

      {alunos.map(aluno => <><h3>{aluno.nome}</h3><p>{aluno.nome_completo}</p>  </>)}
      {/* {alunos.map(aluno => {
        return (<>
          <h3>{aluno.nome}</h3>
          <p>{aluno.nome_completo}</p>
        </>)
      })} */}

      {/*  <h3>Angelo</h3>
      <p>Angelo Lustosa de Figueiredo Filho</p>
      <h3>Alberto</h3>
      <p>Alberto Wowtilla</p> */}
      <div className="card">
        {/* <button onClick={() => {
          setNome(`${nome} Lustosa`)
        }}>
          Adicionar Sobrenome
        </button> */}
      </div>
    </>
  )
}

export default App
