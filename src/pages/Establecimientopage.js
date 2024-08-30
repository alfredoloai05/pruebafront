import React from 'react';
import EstablecimientoList from '../components/EstablecimientoList';
import { Link } from 'react-router-dom';

const EstablecimientoPage = () => {
    return (
        <div>
            <h1>Gestión de Establecimientos</h1>
            <EstablecimientoList />
            <Link to="/">Regresar a Inicio</Link>
        </div>
    );
};

<Link to="/">Regresar a Inicio</Link>

export default EstablecimientoPage;
