
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UsuarioList = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/usuarios')
            .then(response => setUsuarios(response.data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    const handleDelete = (id) => {
        if (window.confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
            axios.delete(`http://localhost:5000/api/usuarios/${id}`)
                .then(() => setUsuarios(usuarios.filter(usuario => usuario.UsuarioId !== id)))
                .catch(error => console.error('Error deleting user:', error));
        }
    };

    return (
        <div>
            <h1>Usuarios</h1>
            <Link to="/usuarios/new">Crear Nuevo Usuario</Link>
            <ul>
                {usuarios.map(usuario => (
                    <li key={usuario.UsuarioId}>
                        {usuario.Nombre}
                        <Link to={`/usuarios/${usuario.UsuarioId}`}>Editar</Link>
                        <button onClick={() => handleDelete(usuario.UsuarioId)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UsuarioList;
