import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import BottleDesign from './pages/BottleDesign';
import OrderBrandingServices from './pages/OrderBrandingServices';
import OrderWaterServices from './pages/OrderWaterServices';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/bottle-design" element={<BottleDesign />} />
              <Route path="/order-branding-services" element={<OrderBrandingServices />} />
              <Route path="/order-water-services" element={<OrderWaterServices />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;