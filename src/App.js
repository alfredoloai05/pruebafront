import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage'; 
import UsuariosList from './components/UsuariosList'; 
import EstablecimientosList from './components/EstablecimientosList'; 
import UsuarioForm from './components/UsuarioForm'; 
import EstablecimientoForm from './components/EstablecimientoForm'; 
import AsignacionPage from './pages/AsignacionPage'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/usuarios" element={<UsuariosList />} />
        <Route path="/usuarios/new" element={<UsuarioForm />} />
        <Route path="/usuarios/:id" element={<UsuarioForm />} />
        <Route path="/establecimientos" element={<EstablecimientosList />} />
        <Route path="/establecimientos/new" element={<EstablecimientoForm />} />
        <Route path="/establecimientos/:id" element={<EstablecimientoForm />} />
        <Route path="/asignaciones" element={<AsignacionPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
