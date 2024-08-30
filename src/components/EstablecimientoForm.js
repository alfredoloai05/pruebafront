import React, { useState } from 'react';
import axios from 'axios';

const EstablecimientoForm = () => {
    const [nombre, setNombre] = useState('');
    const [estado, setEstado] = useState(false); 

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/establecimientos', {
            Nombre: nombre,
            Estado: estado
        })
        .then(response => alert('Establecimiento creado exitosamente.'))
        .catch(error => console.error('Error creating establishment:', error));
    };

    return (
        <div>
            <h1>Crear Establecimiento</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>
                <div>
                    <label>Estado:</label>
                    <input
                        type="checkbox"
                        checked={estado}
                        onChange={e => setEstado(e.target.checked)}
                    />
                    <span>{estado ? 'Activo' : 'Inactivo'}</span>
                </div>
                <button type="submit">Crear</button>
            </form>
        </div>
    );
};

export default EstablecimientoForm;
