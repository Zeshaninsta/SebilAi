import React from 'react';
import Image from '../images/img1.jpg';
import logo from '../images/logo.png';
import PredictionPage from './prediction';
import Maximize from './Maximize';
import Footer from './Footer_page';

const HomePage = () => {
  return (
    <div>
      <div className="relative min-h-[calc(100vh-73px)] h-full overflow-hidden Home sm:p-8 px-4 py-8 w-full">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${Image})` }}></div>

        <div className="absolute top-0 left-0 w-full flex justify-center items-center p-4 md:p-6 lg:p-8">
          <img
            src={logo}
            alt="Logo"
            className="w-20 md:w-24 lg:w-32 xl:w-40 transform -translate-x-1/2 border-4 rounded-full border-[#396E8D] m-8 p-5"
          />
        </div>

        <h1
          className="absolute bottom-0 right-0 p-4 text-white text-right text-2xl md:text-3xl lg:text-5xl xl:text-7xl font-bold"
          // style={{
          //   color: '#FFF',
          //   textAlign: 'center',
          //   fontFamily: 'Mochiy Pop One',
          //   fontSize: '64px',
          //   fontStyle: 'normal',
          //   fontWeight: '400',
          //   lineHeight: 'normal',
          // }}
        >
          Discover the<br />perfect crop<br />for Your<br />Environment
        </h1>
      </div>
      <PredictionPage />
      <Maximize />
    </div>
  );
};

export default HomePage;
