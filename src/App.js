import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Table from './components/Table';
import Screening from './components/Screening';

function App() {
  return (
    <Router>
      <div className="App">
        <h1 className='heading'>APL 2022 Auction Table</h1>
        <Routes>
          <Route path='/screen' element={<Screening />} />
          <Route path='/entry' element={<Table />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
