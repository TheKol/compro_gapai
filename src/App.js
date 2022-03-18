import { Routes, Route } from 'react-router-dom';
import DiklatSatpam from './pages/DiklatSatpam';

import Home from './pages/Home';

function App() {
  return (
    <div className='App overflow-x-hidden'>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/diklat' element={<DiklatSatpam />} />
      </Routes>
    </div>
  );
}

export default App;
