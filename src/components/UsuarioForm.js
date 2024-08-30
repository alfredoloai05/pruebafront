
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UsuarioForm = () => {
    const [usuario, setUsuario] = useState({ Nombre: '', Estado: true });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:5000/api/usuarios/${id}`)
                .then(response => setUsuario(response.data))
                .catch(error => console.error('Error fetching user:', error));
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsuario(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id) {
            axios.put(`http://localhost:5000/api/usuarios/${id}`, usuario)
                .then(() => navigate('/usuarios')) 
                .catch(error => console.error('Error updating user:', error));
        } else {
            axios.post('http://localhost:5000/api/usuarios', usuario)
                .then(() => navigate('/usuarios')) 
                .catch(error => console.error('Error creating user:', error));
        }
    };

    return (
        <div>
            <h1>{id ? 'Editar Usuario' : 'Crear Usuario'}</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        name="Nombre"
                        value={usuario.Nombre}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Estado:</label>
                    <input
                        type="checkbox"
                        name="Estado"
                        checked={usuario.Estado}
                        onChange={(e) => setUsuario(prevState => ({ ...prevState, Estado: e.target.checked }))}
                    />
                </div>
                <button type="submit">Guardar</button>
            </form>
        </div>
    );
};

export default UsuarioForm;
