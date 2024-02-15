// UpdsGoIndex.jsx

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './UpdsGoIndex.css';
import BotonLogoMicrosoft from './ElementosIndex/UnionElmentos/BotonLogoToIndex';
import PerfilPage from './perfil';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function UpdsGoIndex() {
  const auth = getAuth();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [auth]);

  return (
    <Router>
      <div className="UpdsGoIndex">
        <header className="App-header">
          En mantenimiento XD
        </header>
      </div>
    </Router>
  );
}

export default UpdsGoIndex;
