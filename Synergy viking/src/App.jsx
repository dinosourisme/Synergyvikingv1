import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Services from './pages/Services/Services';
import AboutUsPage from "./pages/aboutus/main.jsx"


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<div className="p-10 text-white">Home Page</div>} />
        <Route path="/services" element={<Services />} />        <Route path="/products" element={<div className="p-10 text-white">Products Page</div>} />
        <Route path="/about" element={<AboutUsPage/>} />
        <Route path="/contact" element={<div className="p-10 text-white">Contact Page</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;