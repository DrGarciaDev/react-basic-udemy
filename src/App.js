import React from 'react';

function App() {
  const holaMundo = () => {
    return "Hola mundo";
  }

  const numero = () => {
    console.log('1');
  }
  return (
    <div className="App">
      <h1>Mi Primer App Recordando las bases</h1>
      {holaMundo()}
      <button onClick= {numero}>Click</button>
    </div>
  );
}

export default App;
