import { Routes, Route } from 'react-router-dom';
import DiklatSatpam from './pages/DiklatSatpam';

import Home from './pages/Home';
import PengadaanBarang from './pages/PengadaanBarang';
import YayasanPendidikan from './pages/YayasanPendidikan';
import ScrollToTop from './util/ScrollToTop';

function App() {
  return (
    <div className='App overflow-x-hidden font-Montserrat'>
      <ScrollToTop />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/diklat' element={<DiklatSatpam />} />
        <Route path='/ypcapai' element={<YayasanPendidikan />} />
        <Route path='/supplier' element={<PengadaanBarang />} />
      </Routes>
    </div>
  );
}

export default App;
