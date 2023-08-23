import React from 'react'
import Home from './Home'
import Nav from './Nav'
import PredictionPage from './prediction'
import Maximize from './Maximize'
import Footer from './Footer_page';
import AboutPage from './About';

const index = () => {
  return (
    <div className='index'>
        <Nav />
        <Home />
        <PredictionPage />
        <Maximize />
        <Footer />
        <AboutPage/>


    </div>
  )
}

export default index