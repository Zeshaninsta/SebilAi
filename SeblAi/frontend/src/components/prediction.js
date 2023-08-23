import React, { useState } from 'react';
import image_index from './index_image';

const PredictionPage = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [showDiv, setShowDiv] = useState(false);
  const [humidity, setHumidity] = useState('');
  const [rainfall, setRainfall] = useState('');
  const [temperature, setTemperature] = useState('');
  const [ph, setPh] = useState('');

  const handlePredict = () => {
    const humidityValue = parseFloat(humidity);
    const rainfallValue = parseFloat(rainfall);
    const temperatureValue = parseFloat(temperature);
    const phValue = parseFloat(ph);

    const predictedCrop = "Jute"; 

    const predictedImage = image_index[predictedCrop];
    if (
      (isNaN(humidityValue) || isNaN(rainfallValue) || isNaN(temperatureValue) || isNaN(phValue)) ||
      (humidityValue === 0 || rainfallValue === 0 || temperatureValue === 0 || phValue === 0)
    ) {
      setShowDiv(true);
      setAlertMessage('Please enter valid inputs.');
      setShowAlert(true);
    } else if (phValue === 0) {
      setShowDiv(true);
      setAlertMessage("pH value can't be zero.");
      setShowAlert(true);
    } else {
      setShowDiv(true);
      setAlertMessage(
        "According to Your Given Input the Predicted Value for Your Environment is Rice"
      );
      setShowAlert(true);
    }
    setImageToShow(predictedImage);
  };
  const [imageToShow, setImageToShow] = useState(null);
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white w-full md:w-11/12 lg:w-11/12 xl:w-11/12 p-5 border-t-4 border-4 border-[#396E8D] relative p-5">
        <h1 className="text-[#396E8D] font-Poppins text-6xl font-normal mb-4 border-b-4 border-[#396E8D]">
          Please Enter These Values:
        </h1>
        {/* <hr style={{ width: '1340.008px', height: '9px', background: '#396E8D' }} /> */}
<br/>
        <div className="flex items-center justify-center h-full">
          <div className={`absolute inset-0 flex items-center justify-center ${showDiv ? 'visible' : 'hidden'} w-4/5 h-5/6 m-auto border-2 border-[#396E8D] bg-zinc-300 p-6 rounded-lg shadow-lg transition-transform transform flex-col`}>
            <h1 className='text-left absolute top-0 font-bold mb-4 border-b-4 border-[#396E8D] w-full text-5xl py-4 px-5 text-[#396E8D]'>Result</h1>
            <button
              onClick={() => setShowDiv(false)}
              className="absolute top-0 right-0 p-2 text-gray-600 hover:text-red-600 focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <p className="text-[#396E8D]">{alertMessage}</p>
            <div className="flex items-center justify-center mt-6">
  {imageToShow && (
    <img
      src={imageToShow}
      alt="Predicted Crop"
      className="max-w-full w-28 h-28 absolute bottom-20"
    />
  )}
</div>
          </div>

          <div className="flex flex-col space-y-8">
            <div className="flex flex-col">
              <label htmlFor="humidity" className="text-[#396E8D] font-bold mb-2">
                Humidity
              </label>
              <input
                type="number"
                id="humidity"
                className="border-2 bg-gray-200 p-2 rounded-md focus:border-2-[#000] w-64"
                placeholder="0.00"
                value={humidity}
                onChange={(e) => setHumidity(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="rainfall" className="text-[#396E8D] font-bold mb-2">
                Rainfall
              </label>
              <input
                type="number"
                id="rainfall"
                className="border-2 bg-gray-200 p-2 rounded-md focus:border-2-[#000] w-64"
                placeholder="0.00"
                value={rainfall}
                onChange={(e) => setRainfall(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="temperature" className="text-[#396E8D] font-bold mb-2">
                Temperature
              </label>
              <input
                type="number"
                id="temperature"
                className="border-2 bg-gray-200 p-2 rounded-md focus:border-2-[#000] w-64"
                placeholder="0.00"
                value={temperature}
                onChange={(e) => setTemperature(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="ph" className="text-[#396E8D] font-bold mb-2">
                pH
              </label>
              <input
                type="number"
                id="ph"
                className="border-2 bg-gray-200 p-2 rounded-md focus:border-2-[#000] w-64"
                placeholder="0.00"
                value={ph}
                onChange={(e) => setPh(e.target.value)}
              />
            </div>
          </div>
        </div>
        <button
          onClick={handlePredict}
          className="mt-4 bg-[#396E8D] text-white py-2 px-10 font-bold text-2xl rounded-md focus:outline-none cursor-pointer"
        >
          Predict
        </button>
      </div>
    </div>
  );
};

export default PredictionPage;
