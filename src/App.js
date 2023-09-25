import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


// Pages
import Home from './pages/main_pages/Home'
import Services from './pages/main_pages/Services'
import OurSolutions from './pages/main_pages/OurSolutions'
import Industries from './pages/main_pages/Industries'
import AboutUs from './pages/main_pages/AboutUs'
import ContactUs from './pages/main_pages/ContactUs'

// Subpages
import OilAndGas from '../src/pages/sub_pages/OilAndGas'
import Utilities from '../src/pages/sub_pages/Utilities'
import TransportInfrastructure from '../src/pages/sub_pages/TransportInfrastructure'
import WaterAndWasteWater from '../src/pages/sub_pages/WaterAndWasteWater'

import Nav from './components/Nav'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="App" onLoad={() => <Home />}>

      <Router>
        <ScrollToTop />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/oursolutions" element={<OurSolutions />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />

          <Route path="/oilandgas" element={<OilAndGas />} />
          <Route path="/utilities" element={<Utilities />} />
          <Route path="/transportinfrastructure" element={<TransportInfrastructure />} />
          <Route path="/waterandwastewater" element={<WaterAndWasteWater />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
