import React from 'react';
import sebil from '../images/talk.jpg';

const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-8 md:flex">
      <div className="md:flex-shrink-0 md:mr-4">
        <img src={sebil} alt="Profile Picture" className="w-full h-auto md:w-640 md:h-400 object-cover rounded-full shadow-lg" />
      </div>
      <div className="mt-4 md:mt-0">
        <h1 className="text-4xl font-bold mb-4 text-green-800">About Us</h1>
        <p className="text-gray-600 mb-4">
          Welcome to Sebil AI! We are a team of passionate individuals dedicated to revolutionizing crop selection practices in agriculture. Our goal is to provide intelligent decision-making tools that optimize crop choices, leading to improved yields, financial outcomes, and sustainable farming practices.
        </p>
        <p className="text-gray-600 mb-4">
          Through our innovative solution, Sebil AI, we aim to analyze critical factors such as soil quality, nutrient levels, and local climate conditions to equip agricultural stakeholders with the information they need to make informed decisions.
        </p>
        <p className="text-gray-600">
          Feel free to explore Sebil AI to learn more about our mission and the services we offer. If you have any questions or inquiries, please don't hesitate to contact us. We look forward to assisting you!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
