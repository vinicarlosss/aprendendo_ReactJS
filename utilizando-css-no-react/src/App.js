import React from "react";
import Header from './Componentes/Header';
import Subtitulo from './Componentes/Subtitulo';
import Corpo from './Componentes/Corpo';
import './App.css';


function App() {
  return (
    <section className="caixa">
      <Header/>
      <Subtitulo/>
      <Corpo></Corpo>
      <a 
      href="https://www.youtube.com/cfbcursos" 
      target="blank">CFB Cursos</a>
    </section>
  );
}

export default App;
