import logo from './logo.svg';
import './App.css';

function App() {

  const carros = ['HRV','Golf','Focus', 'Cruze','Argo']
  const listaCarros = carros.map(
    (c)=>
      <li>{c}</li>
  )


  return (
    <>
      <ul>{listaCarros}</ul>
    </>
  );
}

export default App;
