import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let nome = 'Angelo';

  console.log('app.jsx', nome);


  return (
    <>
      <h1>{nome}</h1>
      <div className="card">
        <button onClick={ () => console.log(nome += " Lustosa")}>
          Adicionar Sobrenome
        </button>
      </div>
    </>
  )
}

export default App
