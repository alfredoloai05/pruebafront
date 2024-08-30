// components/EstablecimientoList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const EstablecimientoList = () => {
    const [establecimientos, setEstablecimientos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000//api/establecimientos')
            .then(response => setEstablecimientos(response.data))
            .catch(error => console.error('Error fetching establishments:', error));
    }, []);

    return (
        <div>
            <h1>Establecimientos</h1>
            <Link to="/establecimientos/new">Crear Nuevo Establecimiento</Link>
            <ul>
                {establecimientos.map(establecimiento => (
                    <li key={establecimiento.EstablecimientoId}>
                        {establecimiento.Nombre}
                        <p>Editar</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EstablecimientoList;
