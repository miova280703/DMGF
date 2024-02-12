import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TextMobileStepper from './components/cuestionario';
import ContenidoPropuesta from './components/contenido';
import DenseAppBar from './components/header';
import FooterBar from './components/footer';
import Reproductor from './components/reproductordescriptivo';
import ArticuloDeRevista from './components/bienvenida';
import AgregarCancion from './components/agregarcancion';
import Tatuajes from './components/tatuajes';
// import AgregarTatuaje from './components/agregartatuaje';
import Notas from './components/notas';
import AgregarNota from './components/agregarnota';
import Jorge from './components/jorge';

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{ position: 'relative' }}>
        {/* <header>
          <p>Insertar opciones</p>
        </header> */}

        <DenseAppBar />

        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/DMGF/" element={<ArticuloDeRevista exact />} />
            <Route path="/DMGF/reproductor" element={<Reproductor exact />} />
            <Route path="/DMGF/reproductor/agregar" element={<AgregarCancion exact />} />
            <Route path="/DMGF/tatuaje" element={<Tatuajes exact />} />
            {/* <Route path="/DMGF/tatuaje/agregar" element={<AgregarTatuaje exact />} /> */}
            <Route path="/DMGF/notas" element={<Notas exact />} />
            <Route path="/DMGF/notas/agregar" element={<AgregarNota exact />} />
            <Route path="/DMGF/jorge" element={<Jorge exact />} />
          </Routes>
        </main>
        <footer>
          <p></p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
