import React from 'react';
import sebil from '../images/talk.jpg';

const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-gray-700 mb-4">
        Welcome to Sebil AI! We are a team of passionate individuals dedicated to revolutionizing crop selection practices in agriculture. Our goal is to provide intelligent decision-making tools that optimize crop choices, leading to improved yields, financial outcomes, and sustainable farming practices.
      </p>
      <img src={sebil} alt="Profile Picture" className="rounded-lg shadow-lg mb-4" />
      <p className="text-gray-700 mb-4">
        Through our innovative solution, Sebil AI, we aim to analyze critical factors such as soil quality, nutrient levels, and local climate conditions to equip agricultural stakeholders with the information they need to make informed decisions.
      </p>
      <p className="text-gray-700">
        Feel free to explore Sebil AI to learn more about our mission and the services we offer. If you have any questions or inquiries, please don't hesitate to contact us. We look forward to assisting you!
      </p>
    </div>
  );
};

export default AboutPage;
