import React from "react";
import Logo from './componentes/imgs/LOGO.png';


export default function App(){
  const canal = () => {
    return('CFB Cursos')
  }
  const curso = 'Curso de React';
  return(
    <>
    <p>{'Canal: '+ canal()}</p>
    <br/>
    <p>{curso}</p>
    <img src={Logo}/>
    <img src='/img/muque.jpg'/>
    </>
  )
}

