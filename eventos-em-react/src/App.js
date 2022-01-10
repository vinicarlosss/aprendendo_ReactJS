import React,{useState} from "react";
import Led from "./Componentes/Led.js/Led";

function App() {

  const[ligado,setLigado]=useState(false)
  const cancelar=(obj)=>{
    return obj.preventDefault()
  }

  return (
    <>
      <Led ligado={ligado} setLigado={setLigado}/>
      <a 
        href='http://youtube.com/cfbcursos'
        target='_blank'
        onClick={(e)=>cancelar(e)}
      >
        CFB Cursos
      </a>
    </>
  );
}

export default App;
