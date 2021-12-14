import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import NotFound from './components/pages/NotFound';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';


function App() {

  return (
    <>
      <Router>
        <Navbar />
        {/* <Navigate to='/Home' /> */ }
        <Routes>
          <Route exact path='/' element={ <Home /> } />
          <Route path='/services' element={ <Services /> } />
          <Route path='/products' element={ <Products /> } />
          <Route path='/sign-up' element={ <SignUp /> } />
          <Route path='/hero' element={ <HeroSection /> } />
          <Route path='*' element={ <NotFound /> } />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
