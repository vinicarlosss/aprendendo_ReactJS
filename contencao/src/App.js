import React from "react";
import Caixa from "./Components/Caixa";
import Canal from "./Components/Canal";

function App() {
  return (
  <>
    <Caixa site="www.cfbcursos.com.br">
      <Canal/>
      <p>Curso de React</p>
    </Caixa>
  </>
  );
}

export default App;
