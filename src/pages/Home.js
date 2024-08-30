import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Prueba</h1>
            <p>ALFREDO LOAIZA</p>
            <div>
                <h2>Gestión de Datos</h2>
                <ul>
                    <li>
                        <Link to="/usuarios">Gestionar Usuarios</Link>
                    </li>
                    <li>
                        <Link to="/establecimientos">Gestionar Establecimientos</Link>
                    </li>
                    <li>
                        <Link to="/asignaciones">Asignar Establecimientos a Usuarios</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Home;
