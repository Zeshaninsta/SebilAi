import React from 'react'
import Home from './Home'
import Nav from './Nav'
import PredictionPage from './prediction'

const index = () => {
  return (
    <div className='index'>
        <Nav />
        <Home />
        <PredictionPage />

    </div>
  )
}

export default index