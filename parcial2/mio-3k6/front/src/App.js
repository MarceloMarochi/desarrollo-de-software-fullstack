import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Index from './components/Index';
import Registro from './components/Registro';
import './App.css';
import Consulta from './components/Consulta';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/registro' element={<Registro />} />
            <Route path='/registro/reparaciones' element={<Consulta />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
