import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; 

export const getUsuarios = () => axios.get(`${API_URL}/usuarios`);
export const getUsuario = (id) => axios.get(`${API_URL}/usuarios/${id}`);
export const createUsuario = (data) => axios.post(`${API_URL}/usuarios`, data);
export const updateUsuario = (id, data) => axios.put(`${API_URL}/usuarios/${id}`, data);
export const deleteUsuario = (id) => axios.delete(`${API_URL}/usuarios/${id}`);

export const getEstablecimientos = () => axios.get(`${API_URL}/establecimientos`);
export const getEstablecimiento = (id) => axios.get(`${API_URL}/establecimientos/${id}`);
export const createEstablecimiento = (data) => axios.post(`${API_URL}/establecimientos`, data);
export const updateEstablecimiento = (id, data) => axios.put(`${API_URL}/establecimientos/${id}`, data);
export const deleteEstablecimiento = (id) => axios.delete(`${API_URL}/establecimientos/${id}`);
