import React from 'react';
import Saludar from './components/Saludar';

function App() {
  const enviarSaludo = (nombre) => {
    console.log('Hola ' + nombre);
  }

  // const numero = () => {
  //   console.log('1');
  // }
  return (
    <div className="App">
      <h1>Mi Primer Componente Recordando las bases</h1>
      {/* {holaMundo()}
      <button onClick= {numero}>Click</button> */}
       <p>{/* Para que no se renderice una función al momento, sino enviar su lógica, se manda sin parentesís */}
        <Saludar nombre = "Agustin" enviarSaludo={enviarSaludo}/>
      </p>
      <p>
        <Saludar nombre = "Izel" enviarSaludo={enviarSaludo}/>
      </p>
    </div>
  );
}

export default App;
