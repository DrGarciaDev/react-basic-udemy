import React, { useState, useEffect } from 'react';

function Car() {
    const [started, setStarted] = useState(false);
    const [countKm, setCountKm] = useState(0);

    const checkStateCar = () => {
        if (started) {
            return <span style={{color: 'green'}}>Encendido</span>;
        }
        return <span style={{color: 'red'}}>Apagado</span>;
    }

    const increaseKm = (num) => {
        if (started) {
            setCountKm(countKm + num);
        }
        else{
            alert('El coche está apagado');
        }
    }

    useEffect(() => {
        document.title = 'Coche ' + started;
    }, [started]);

    return (
        <div>
            <h2>Nuestro carro está: {checkStateCar()}</h2>
            <h2>Kilometros recorridos {countKm}</h2>
            <button
                onClick={() => setStarted(!started)}
            >
                Encender / Apagar
            </button>
            <button
                onClick={() => {
                    increaseKm(2)
                }}
            >
                Incrementar Kilometros
            </button>
        </div>
    );
}

export default Car;