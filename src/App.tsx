import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Regulations from './pages/Regulations';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="sobre" element={<About />} />
            <Route path="regulamentos" element={<Regulations />} />
            <Route path="contato" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;