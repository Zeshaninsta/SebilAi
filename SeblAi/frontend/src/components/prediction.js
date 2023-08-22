// import React from 'react';
import React, { useState } from 'react';
import ShowAlertPage from './showalert';
import Showdiv from './showdiv'

const PredictionPage = () => {
    const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [showDiv, setShowDiv] = useState(false);


  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleShowError = () => {
    setMessage('Please enter valid inputs.');
    setIsError(true);
  };



  const handlePredict = () => {
    const humidity = parseFloat(document.getElementById('humidity').value);
    const rainfall = parseFloat(document.getElementById('rainfall').value);
    const temperature = parseFloat(document.getElementById('temperature').value);
    const ph = parseFloat(document.getElementById('ph').value);
    // setShowDiv(true)
    

    if (humidity === 0 || '' && rainfall === 0 || '' && temperature === 0 || '') {
      setAlertMessage('Please enter valid inputs.');
      setShowAlert(true);
      setShowDiv(true)
    } else if (ph === 0 /* Your specific condition for pH value */) {
      setAlertMessage('Please enter a valid pH value.');
      setShowAlert(true);
      setShowDiv(true)
    } else {
      // Simulating prediction delay for demonstration purposes
      setTimeout(() => {
        setShowAlert(true);
      }, 2000); // Simulated 2-second delay
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 transition-opacity ${showAlert ? 'opacity-100' : 'opacity-0 ">
      <div className="bg-white w-full md:w-11/12 lg:w-11/12 xl:w-11/12 p-5  border-t-4 border-4 border-[#396E8D] relative">
      <div className={`absolute inset-0 flex items-center justify-center ${showDiv ? 'visible' : 'hidden'} bg-white p-6 border rounded-lg shadow-lg transition-transform transform`}>
      <button
    onClick={() => setShowDiv(false)}
    className="absolute top-0 right-0 p-2 text-gray-600 hover:text-red-600 focus:outline-none"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>
  <p>{setAlertMessage}</p>
</div>

        <h2 className="text-center text-2xl md:text-3xl font-semibold py-2 border-b-4 border-[#396E8D] mb-5">Please Enter These Values:</h2>
        <div className="space-y-8">
          <div className="flex flex-col w-2/4 m-auto">
            <label htmlFor="humidity" className="text-gray-800 font-bold mb-2">Humidity</label>
            <input
              type="number"
              id="humidity"
              className="border-2 border-[#396E8D] p-2 rounded-md focus:outline-none"
              placeholder='0.00'
            />
          </div>
          <div className="flex flex-col w-2/4 m-auto">
            <label htmlFor="rainfall" className="text-gray-800 font-bold mb-2">Rainfall</label>
            <input
              type="number"
              id="rainfall"
              className="border-2 border-[#396E8D] p-2 rounded-md focus:outline-none"
              placeholder='0.00'
            />
          </div>
          <div className="flex flex-col w-2/4 m-auto">
            <label htmlFor="temperature" className="text-gray-800 font-bold mb-2">Temperature</label>
            <input
              type="number"
              id="temperature"
              className="border-2 border-[#396E8D] p-2 rounded-md focus:outline-none"
              placeholder='0.00'
            />
          </div>
          <div className="flex flex-col w-2/4 m-auto">
            <label htmlFor="ph" className="text-gray-800 font-bold mb-2">pH</label>
            <input
              type="number"
              id="ph"
              className="border-2 border-[#396E8D] p-2 rounded-md focus:outline-none"
              placeholder='0.00'
            />
          </div>
        </div>
      </div>
      <button
        // onClick={() => setShowDiv(true)}
        onClick={handlePredict }
          className="mt-4 bg-[#396E8D] text-white py-2 px-10 font-bold text-2xl rounded-md hover:bg-[#162b38] focus:outline-none mb-5">
          Predict
        </button>
    </div>
  );
};

export default PredictionPage;
