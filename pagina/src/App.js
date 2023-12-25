import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TextMobileStepper from './components/cuestionario';
import ContenidoPropuesta from './components/contenido';
import DenseAppBar from './components/header';
import FooterBar from './components/footer';

function App() {
  return (
    <div className="App">
      <DenseAppBar />

      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<TextMobileStepper />} />
            <Route path="/propuesta" element={<ContenidoPropuesta />} />
          </Routes>
        </Router>
      </header>
      <FooterBar />
    </div>
  );
}

export default App;
