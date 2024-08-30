
import React from 'react';
import UsuarioList from '../components/UsuarioList';
import { Link } from 'react-router-dom';

const UsuarioPage = () => {
    return (
        <div>
            <h1>Gestión de Usuarios</h1>
            <UsuarioList />
            <Link to="/">Regresar a Inicio</Link>
        </div>
    );
};

export default UsuarioPage;
