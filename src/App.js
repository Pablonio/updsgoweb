// App.jsx
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'; // Importa BrowserRouter
import MicrosoftLoginButton from './MicrosoftLoginButton';
function App() {
  return (
    <Router> {/* Asegúrate de envolver tu aplicación con un Router */}
      <div className="App">
        <header className="App-header">
          <MicrosoftLoginButton />
        </header>
      </div>
    </Router>
  );
}

export default App;
