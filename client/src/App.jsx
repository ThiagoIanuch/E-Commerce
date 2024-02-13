import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/index.jsx';
import Register from './pages/register.jsx';
import NotFound from './pages/not-found.jsx';
import './pages/css/global.css'

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
