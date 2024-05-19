import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import ChatWindow from './components/ChatWindow/ChatWindow';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from "./components/Footer/Footer";
import './App.css';

function App() {
  return (
    <Router>
        <Header />
        <div className='wrapper'>
        <Routes>
          <Route path="/" element={<ChatWindow />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
        <Footer/>
      </Router>
  );
}

export default App;
