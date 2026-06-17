import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<div className="p-10 text-white">Home Page</div>} />
        <Route path="/services" element={<div className="p-10 text-white">Services Page</div>} />
        <Route path="/products" element={<div className="p-10 text-white">Products Page</div>} />
        <Route path="/about" element={<div className="p-10 text-white">About Page</div>} />
        <Route path="/contact" element={<div className="p-10 text-white">Contact Page</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;