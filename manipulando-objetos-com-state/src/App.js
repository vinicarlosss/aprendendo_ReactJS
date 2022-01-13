import React,{ useState } from "react";

function App() {

const [form,setForm]=useState({"nome":"","curso":"","ano":""})
const handleFormChange = (e)=>{
  if(e.target.getAttribute('name')=='fnome'){
    setForm({'nome':e.target.value,'curso':form.curso,'ano':form.ano})
  }else if(e.target.getAttribute('name')=='fcurso'){
    setForm({'nome':form.nome,'curso':e.target.value,'ano':form.ano})
  }else if(e.target.getAttribute('name')=='fano'){
    setForm({'nome':form.nome,'curso':form.curso,'ano':e.target.value})
  }
}

  return (
    <>
      <label>Digite seu nome </label>
      <input 
        type="text" 
        name="fnome"
        value = {form.nome}
        onChange={(e)=>handleFormChange(e)}
        />
        <br/>
        <label>Digite seu nome </label>
      <input 
        type="text" 
        name="fcurso"
        value = {form.curso}
        onChange={(e)=>handleFormChange(e)}
        />
        <br/>
        <label>Digite seu nome </label>
      <input 
        type="text" 
        name="fano"
        value = {form.ano}
        onChange={(e)=>handleFormChange(e)}
        />
        <br/>
      <p>Nome digitado: {form.nome}</p>
      <p>Curso digitado: {form.curso}</p>
      <p>Ano digitado: {form.ano}</p>

    </>
  );
}

export default App;