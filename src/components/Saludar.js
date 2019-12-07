// import React from 'react';

function Saludar (props) {
    // console.log(props);
    // Working with destructuring
    const {nombre, apellidos} = props;

    return `Hola ${nombre} ${apellidos}`;
}

export default Saludar;