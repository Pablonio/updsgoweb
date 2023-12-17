import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import MicrosoftLoginButton from './MicrosoftLoginButton';
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

  if (loading) {
    return window.alert('Esperando Respuesta');
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {user ? null : <MicrosoftLoginButton setUser={setUser} />}
          <Routes>
            <Route
              path="/"
              element={
                user ? (
                  <Navigate to="/perfil" replace />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />
            <Route
              path="/perfil"
              element={user ? <PerfilPage user={user} /> : <Navigate to="/" replace />}
            />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default UpdsGoIndex;
