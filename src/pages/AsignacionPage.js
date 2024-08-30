// pages/AsignacionPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AsignacionPage = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [establecimientos, setEstablecimientos] = useState([]);
    const [selectedUser, setSelectedUser] = useState('');
    const [selectedEstablecimientos, setSelectedEstablecimientos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/usuarios')
            .then(response => setUsuarios(response.data))
            .catch(error => console.error('Error fetching users:', error));

        axios.get('http://localhost:5000/api/establecimientos')
            .then(response => setEstablecimientos(response.data))
            .catch(error => console.error('Error fetching establishments:', error));
    }, []);

    const handleUserChange = (e) => {
        setSelectedUser(e.target.value);
    };

    const handleEstablecimientoChange = (e) => {
        const value = e.target.value;
        setSelectedEstablecimientos(prevState => 
            prevState.includes(value) 
                ? prevState.filter(item => item !== value)
                : [...prevState, value]
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/asignaciones', {
            UsuarioId: selectedUser,
            Establecimientos: selectedEstablecimientos
        })
        .then(() => alert('Establecimientos asignados exitosamente.'))
        .catch(error => console.error('Error assigning establishments:', error));
    };

    return (
        <div>
            <h1>Asignar Establecimientos a Usuarios</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Selecciona Usuario:</label>
                    <select value={selectedUser} onChange={handleUserChange}>
                        <option value="">Selecciona un usuario</option>
                        {usuarios.map(usuario => (
                            <option key={usuario.UsuarioId} value={usuario.UsuarioId}>
                                {usuario.Nombre}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Selecciona Establecimientos:</label>
                    {establecimientos.map(establecimiento => (
                        <div key={establecimiento.EstablecimientoId}>
                            <input
                                type="checkbox"
                                value={establecimiento.EstablecimientoId}
                                checked={selectedEstablecimientos.includes(establecimiento.EstablecimientoId)}
                                onChange={handleEstablecimientoChange}
                            />
                            {establecimiento.Nombre}
                        </div>
                    ))}
                </div>
                <button type="submit">Asignar Establecimientos</button>
            </form>
            <Link to="/">Regresar a Inicio</Link>
        </div>
    );
};

export default AsignacionPage;
