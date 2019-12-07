import React from 'react';
import Saludar from './components/Saludar';

function App() {
  // const holaMundo = () => {
  //   return "Hola mundo";
  // }

  // const numero = () => {
  //   console.log('1');
  // }
  return (
    <div className="App">
      <h1>Mi Primer Componente Recordando las bases</h1>
      {/* {holaMundo()}
      <button onClick= {numero}>Click</button> */}
      <Saludar />
    </div>
  );
}

export default App;
