// import React from 'react';
import React, { useState } from 'react';
import ShowAlertPage from './showalert';
import Showdiv from './showdiv'

const PredictionPage = () => {
    const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [showDiv, setShowDiv] = useState(false);
  const [humidity, setHumidity] = useState('');
  const [rainfall, setRainfall] = useState('');
  const [temperature, setTemperature] = useState('');
  const [ph, setPh] = useState('');
  
  const handlePredict = () => {
    const humidity = parseFloat(document.getElementById('humidity').value);
    const rainfall = parseFloat(document.getElementById('rainfall').value);
    const temperature = parseFloat(document.getElementById('temperature').value);
    const ph = parseFloat(document.getElementById('ph').value);

    
    
    if ((humidity === 0 || humidity === "") && (rainfall === 0 || rainfall === "") && (temperature === 0 || temperature === "") && (ph === 0 || ph === ""))  {
      setShowDiv(true)
      setAlertMessage("Please enter valid inputs.");
      setShowAlert(true);
    } else if (ph === 0 /* Your specific condition for pH value */) {
      setShowDiv(true)
      setAlertMessage("pH value can't be zero.");
      setShowAlert(true);
    } else {
      // Simulating prediction delay for demonstration purposes
      setShowDiv(true)
      setAlertMessage("According to Your Given Input the Predicted Value for Your Environment is Rice");
      setShowAlert(true);
      // Simulated 2-second delay
    }
  };
  const isInputEmpty = humidity === '' || rainfall === '' || temperature === '' || ph === '';
  
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 transition-opacity ${showAlert ? 'opacity-100' : 'opacity-0 ">
      <div className="bg-white w-full md:w-11/12 lg:w-11/12 xl:w-11/12 p-5  border-t-4 border-4 border-[#396E8D] relative p-5">
      <div className={`absolute inset-0 flex items-center justify-center ${showDiv ? 'visible' : 'hidden'} w-4/5 h-5/6 m-auto border-2 border-[#396E8D] bg-zinc-300 p-6 rounded-lg shadow-lg transition-transform transform`}>
        <h1 className='absolute top-0 left-0 border-b-4 text-start px-4 border-[#396E8D] text-[#396E8D] text-5xl w-full py-4 font-bold'>Result</h1>
      <button
    onClick={() => setShowDiv(false)}
    className="absolute top-0 right-0 p-2 text-gray-600 hover:text-red-600 focus:outline-none"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>
  <p className='text-[#396E8D]'>{alertMessage}</p>
</div>

        <h2 className="text-center text-2xl md:text-3xl font-semibold py-2 border-b-4 border-[#396E8D] mb-5">Please Enter These Values:</h2>
        <div className="space-y-8">
          <div className="flex flex-col w-2/4 m-auto">
            <label htmlFor="humidity" className="text-gray-800 font-bold mb-2">Humidity</label>
            <input
              type="number"
              id="humidity"
              className="border-2 border-[#396E8D] p-2 rounded-md focus:border-2-[#000]"
              placeholder='0.00'
              value={humidity}
              onChange={(e) => setHumidity(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-2/4 m-auto">
            <label htmlFor="rainfall" className="text-gray-800 font-bold mb-2">Rainfall</label>
            <input
              type="number"
              id="rainfall"
              className="border-2 border-[#396E8D] p-2 rounded-md focus:border-2-[#000]"
              placeholder='0.00'
              value={rainfall}
              onChange={(e) => setRainfall(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-2/4 m-auto">
            <label htmlFor="temperature" className="text-gray-800 font-bold mb-2">Temperature</label>
            <input
              type="number"
              id="temperature"
              className="border-2 border-[#396E8D] p-2 rounded-md focus:border-2-[#000]"
              placeholder='0.00'
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-2/4 m-auto">
            <label htmlFor="ph" className="text-gray-800 font-bold mb-2">pH</label>
            <input
              type="number"
              id="ph"
              className="border-2 border-[#396E8D] p-2 rounded-md focus:border-2-[#000]"
              placeholder='0.00'
              value={ph}
              onChange={(e) => setPh(e.target.value)}
            />
          </div>
        </div>
      </div>
      <button
        // onClick={() => setShowDiv(true)}
        onClick={handlePredict }
          
          className="mt-4 bg-[#396E8D] text-white py-2 px-10 font-bold text-2xl rounded-md  focus:outline-none mb-5 cursor-pointer"  hidden={isInputEmpty}>
          Predict
        </button>
    </div>
  );
};

export default PredictionPage;
