import React from 'react';
// import Car from './components/Car';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Contacto from './pages/Contacto';
import QuienSoy from './pages/QuienSoy';

function App() {

  return (
    <div className="App">
      <h1>Mi Primer Componente Recordando las bases</h1>
      <h2>Route with React Router Dom</h2>
      <Router>
        <div>
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/contacto">
            <button>Contacto</button>
          </Link>
          <Link to="/quien-soy">
            <button>Quien Soy</button>
          </Link>
        </div>

        <Switch>
          <Route path="/contacto">
            <Contacto/>
          </Route>
          <Route path="/quien-soy">
            <QuienSoy/>
          </Route>
        </Switch>
      </Router>
      {/* <Car/> */}
    </div>
  );
}

export default App;
