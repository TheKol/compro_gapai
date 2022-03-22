import { Routes, Route } from 'react-router-dom';
import DiklatSatpam from './pages/DiklatSatpam';

import Home from './pages/Home';
import YayasanPendidikan from './pages/YayasanPendidikan';

function App() {
  return (
    <div className='App overflow-x-hidden font-Montserrat'>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/diklat' element={<DiklatSatpam />} />
        <Route path='/ypcapai' element={<YayasanPendidikan />} />
      </Routes>
    </div>
  );
}

export default App;
