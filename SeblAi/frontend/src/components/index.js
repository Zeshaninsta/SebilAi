import React from 'react'
import Home from './Home'
import Nav from './Nav'
import PredictionPage from './prediction'
import Maximize from './Maximize'
import Footer from './Footer_page'

const index = () => {
  return (
    <div className='index'>
        <Nav />
        <Home />
        <PredictionPage />
        <Maximize />
        <Footer />


    </div>
  )
}

export default index