import React, { useState } from 'react';
import Modal from 'react-modal';
import image from './Pictures/Millet.png'

const customModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '600px',
  },
};

function App() {
  const [inputValue, setInputValue] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [result, setResult] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const calculateResult = () => {
    const calculatedResult = inputValue * 2; // Replace with your logic
    setResult(calculatedResult);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setInputValue('');
    setResult('');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <input
          type="number"
          placeholder="Enter a number"
          className="border rounded p-2 mr-2"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={calculateResult}
        >
          Calculate
        </button>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customModalStyles}
      >
        <div className="p-4 w-10/12">
          {/* Nav Section */}
          <nav className="flex justify-between items-center mb-4">
            <span className="text-xl font-bold">Navigation</span>
            <button
              className="text-gray-600 hover:text-gray-800 absolute top-0"
              onClick={closeModal}
            >
              Close
            </button>
          </nav>
          {/* Result Rendering Section */}
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">Result</h2>
            <p className="text-lg">{result}</p>
          </div>
          {/* Image at Bottom Center */}
          <div className="flex justify-center">
            <img
              src={image}
              alt="Image"
              className="w-16"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default App;
