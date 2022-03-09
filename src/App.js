import {useState} from 'react'
import './app.css'

function App() {

  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [msg, setMsg] = useState('')

  function calcularIMC(){
    const alt = altura / 100;
    const imc = (peso / (alt * alt)).toFixed(2);


    if(imc < 18.6){
      setMsg(`Abaixo do Peso | IMC = ${imc}`);
    }else if( imc >= 18.6 && imc < 24.9){
      setMsg(`Peso Ideal | IMC = ${imc}`);
    }else if( imc >= 24.9 && imc < 34.9 ){
      setMsg(`Levemente Acima do Peso | IMC = ${imc}`);
    }else if (imc >= 34.9 ){
      setMsg(`Acima do Peso | IMC = ${imc}`);
    }
  }

  return (

    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular o seu IMC</span>


      <div className="area-input">
        <input
          type="number"
          placeholder="Peso em (kg) Ex: 90"
          value = {peso}
          onChange={(event) => setPeso(event.target.value) }
        />
        <input
          type="number"
          placeholder="Altura em (cm) Ex: 180"
          value = {altura}
          onChange={(event) => setAltura(event.target.value) }
        />
          
        <button onClick={calcularIMC}>
          Calcular
        </button>       
      </div>
     
      <h2>{msg}</h2>
    </div>
  );
}

export default App;
