import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/Home';
import AboutPage from './pages/about/aboutPage';
import Header from './components/header';
import Error from './components/error';
import Footer from './components/footer';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);