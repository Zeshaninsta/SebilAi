import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Nav from './Nav';

import AboutPage from './About_us';
import ContactForm from './contact';
import NavigationBar from './Nav';
import Footer from './Footer_page';

const App = () => {
  return (
    <Router>
      <div className='index'>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
        <Footer/>
       
       
      </div>
    </Router>
  );
};

export default App;
