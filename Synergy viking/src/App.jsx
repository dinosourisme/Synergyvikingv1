import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Services from './pages/Services/Services';
import AboutUsPage from "./pages/aboutus/main.jsx";
import Products from "./pages/products/Products.jsx";
import ProductDetail from "./pages/productDetail/ProductDetails.jsx"
import Home from './pages/homepage/HomePage.jsx'
import ContactPage from './pages/contactpage/contactpage.jsx'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />        
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/about" element={<AboutUsPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;