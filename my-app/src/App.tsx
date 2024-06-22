import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import NavigationBar from './NavigationBar';
import About from './About';
import Street from './Street';
import Portraits from './Portraits';
import Outdoors from './Outdoors';
import Filmmaking from './Filmmaking';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/street" element={<Street />} />
          <Route path="/portraits" element={<Portraits />} />
          <Route path="/outdoors" element={<Outdoors />} />
          <Route path="/filmmaking" element={<Filmmaking />} />
          <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
