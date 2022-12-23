import './App.css';
import React, { useState } from 'react';

function App() {

  const [numero_UM, setNumero_UM] = useState('')
  const [numero_DOIS, setNumero_DOIS] = useState('')
  const [resultado, setResultado] = useState('')
  const [operacao, setOperacao] = useState('Soma')

  function calcular(){
    setResultado(0)
    if (operacao == 'Soma'){
      setResultado(parseFloat(numero_UM) + parseFloat(numero_DOIS))
      console.log(resultado)
    }
    if (operacao == 'Subtracao'){
      setResultado(parseFloat(numero_UM) - parseFloat(numero_DOIS))
      console.log(resultado)
    }
    if (operacao == 'Multiplicacao'){
      setResultado(parseFloat(numero_UM) * parseFloat(numero_DOIS))
      console.log(resultado)
    }
    if (operacao == 'Divisao'){
      setResultado(parseFloat(numero_UM) / parseFloat(numero_DOIS))
      console.log(resultado)
    }
  }
  
  return (
    <div className="App">
      <p>Numero Um</p>
      <input type="number" value={numero_UM} onChange={(e) => setNumero_UM(e.target.value)}></input>

      <p>Numero Dois</p>
      <input type="number" value={numero_DOIS} onChange={(e) => setNumero_DOIS(e.target.value)}></input>

      <p>operacao</p>
      <select onChange={(e) => setOperacao(e.target.value)}>
          <option>Soma</option>
          <option>Subtracao</option>
          <option>Multiplicacao</option>
          <option>Divisao</option>
      </select>

      <button onClick={calcular}>Calcular</button>
      <p>{resultado}</p>
    </div>
  );
}

export default App;
