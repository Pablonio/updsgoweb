import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MicrosoftLoginButton from './MicrosoftLoginButton';
import PerfilPage from './perfil'; // Asegúrate de importar tu página de perfil

function UpdsGoIndex() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<MicrosoftLoginButton />} />
            <Route path="/perfil" element={<PerfilPage />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default UpdsGoIndex;
