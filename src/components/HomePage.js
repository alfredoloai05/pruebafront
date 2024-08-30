import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [asignaciones, setAsignaciones] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/asignaciones')
            .then(response => {
                setAsignaciones(response.data);
            })
            .catch(error => {
                console.error('Error fetching asignaciones:', error);
            });
    }, []);

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
            <div>
                <h2>Asignaciones de Establecimientos a Usuarios</h2>
                {asignaciones.length === 0 ? (
                    <p>No hay asignaciones para mostrar.</p>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>UsuarioId</th>
                                <th>EstablecimientoId</th>
                            </tr>
                        </thead>
                        <tbody>
                            {asignaciones.map(asignacion => (
                                <tr key={`${asignacion.UsuarioId}-${asignacion.EstablecimientoId}`}>
                                    <td>{asignacion.UsuarioId}</td>
                                    <td>{asignacion.EstablecimientoId}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default HomePage;
