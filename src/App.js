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
    <div className="App">

      <Router>
        <ScrollToTop />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Services" element={<Services />}></Route>
          <Route path="/OurSolutions" element={<OurSolutions />}></Route>
          <Route path="/Industries" element={<Industries />}></Route>
          <Route path="/AboutUs" element={<AboutUs />}></Route>
          <Route path="/ContactUs" element={<ContactUs />}></Route>

          <Route path="/OilAndGas" element={<OilAndGas />}></Route>
          <Route path="/Utilities" element={<Utilities />}></Route>
          <Route path="/TransportInfrastructure" element={<TransportInfrastructure />}></Route>
          <Route path="/WaterAndWasteWater" element={<WaterAndWasteWater />}></Route>
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
