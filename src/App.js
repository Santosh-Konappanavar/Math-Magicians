import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import CalculatorRouter from './Routes/calculator';
import Header from './components/head';
import Home from './Routes/home';
import Quotes from './Routes/quetes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="quote" element={<Quotes />} />
          <Route path="calculator" element={<CalculatorRouter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
