import React from 'react';
import logo from '../images/logo.png'; // Replace with your logo image path
import companyImage from '../images/company-image.jpg'; // Replace with your company image path

const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="container mx-auto p-8 bg-white rounded-lg shadow-md">
        <div className="flex justify-center">
          <img src={logo} alt="Company Logo" className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 rounded-full border-4 border-[#396E8D]" />
        </div>

        <div className="mt-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#396E8D]">About Our Company</h1>
          <img src={companyImage} alt="Company Image" className="w-full mt-8 rounded-lg shadow-lg" />

          <p className="mt-8 text-gray-700 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat dolor eget metus fermentum, a luctus lectus blandit. Nullam et turpis a nunc ultricies congue. Vivamus rhoncus, odio at sollicitudin ullamcorper, odio lorem bibendum turpis, id luctus tortor purus id felis.
          </p>

          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam interdum quam eget pulvinar. Proin laoreet justo a neque sollicitudin, ut feugiat urna feugiat. Suspendisse eget lectus vel augue consectetur egestas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
