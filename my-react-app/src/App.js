import './App.css';
import { About } from './component/About';
import { Contact } from './component/Contact';
import Footer from './component/Footer';
import Header from './component/Header';
import Home from './component/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
          
          </Routes>
        <Footer />
    
    </Router>
  );
}

export default App;
