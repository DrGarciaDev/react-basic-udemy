import React from 'react';

function Saludar (props) {
    // console.log(props);
    // Working with destructuring
    const {nombre, enviarSaludo} = props;

    return (
        <div>
            <p>Hola {nombre}</p>
            <button onClick={() => enviarSaludo(nombre)}>Enviar saludo</button>
        </div>
    );
}

export default Saludar;