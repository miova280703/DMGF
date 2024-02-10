import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TextMobileStepper from './components/cuestionario';
import ContenidoPropuesta from './components/contenido';
import DenseAppBar from './components/header';
import FooterBar from './components/footer';
import MediaControlCard from './components/reproductor';

function App() {
  return (
    <div className="App">
      <header>
        <p>Insertar opciones</p>
      </header>

      <main style={{ flex: 1 }}>
        <Router>
          <Routes>
            <Route path="/DMGF/" element={<MediaControlCard />} />
            <Route path="/propuesta" element={<ContenidoPropuesta />} />
          </Routes>
        </Router>
      </main>
      <footer>
        <p>© 2024 CIMA. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
