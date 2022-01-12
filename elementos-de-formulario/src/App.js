import React,{ useState } from "react";

function App() {

const [nome,setNome]=useState('')
const[carro,setCarro]=useState('HRV')

  return (
    <>
      <label>Digite seu nome </label>
      <input 
        type="text" 
        name="fnome"
        value = {nome}
        onChange={(e) => setNome(e.target.value)}
        />
      <p>Nome digitado: {nome}</p>
      <label>Selecione um carro</label>
      <select 
      onChange={(e)=> setCarro(e.target.value)}
      values={carro}>
        <option value="HRV">HRV</option>
        <option value="Golf">Golf</option>
        <option value="Cruze">Cruze</option>
        <option value="Argo">Argo</option>
      </select>
      <p>Carro selecionado: {carro}</p>
    </>
  );
}

export default App;
