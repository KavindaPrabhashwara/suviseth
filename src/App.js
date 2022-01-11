import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import NotFound from './components/pages/NotFound';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Logging from './components/pages/Logging';
import Register from './components/pages/Register';


function App() {

  return (
    <>
      <Router>
        <Navbar />
        {/* <Navigate to='/Home' /> */ }
        <Routes>
          // routing the elements
          <Route exact path='/' element={ <Home /> } />
          <Route path='/services' element={ <Services /> } />
          <Route path='/products' element={ <Products /> } />
          <Route path='/sign-up' element={ <Logging /> } />
          <Route path='/hero' element={ <HeroSection /> } />
          <Route path='/home' element={ <Home /> } />
          <Route path='*' element={ <NotFound /> } />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
