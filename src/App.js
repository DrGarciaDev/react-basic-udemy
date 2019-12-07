import React from 'react';
import { Button, Accordion, Card } from 'react-bootstrap';
import { ReactComponent as ReactIcon } from './assets/react.svg';
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
      <br/><br/>
      <Button variant="primary">Normal</Button>      
      <br/><br/>
      <Button variant="primary" size="lg">Large</Button>      
      <br/><br/>
      <Button variant="primary" onClick={() => console.log('Holas')}>OnClik</Button>      
      {/* {holaMundo()}
      <button onClick= {numero}>Click</button> */}
       <p>{/* Para que no se renderice una función al momento, sino enviar su lógica, se manda sin parentesís */}
        <Saludar nombre = "Agustin" enviarSaludo={enviarSaludo}/>
      </p>
      <p>
        <Saludar nombre = "Izel" enviarSaludo={enviarSaludo}/>
      </p>
      <br/>
      <hr/>
      {/* imagen como componente */}
      <ReactIcon/>
      <br/><br/>
      <hr/>
      <h2>Uso de acordiones</h2>
      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Click me!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Click me!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}

export default App;
