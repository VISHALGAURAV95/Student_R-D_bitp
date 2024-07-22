import React from 'react';
import 'tailwindcss/tailwind.css';

const HeroSection = () => {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute top-0 left-0 w-48 h-48 bg-grey-700 rounded-full opacity-25 animate-pulse"></div>
      <section className="flex flex-col md:flex-row justify-between items-center py-16 px-4 md:px-16 bg-gradient-to-r from-blue-700 to-grey-600 text-white transition-all duration-500 ease-in-out transform hover:scale-105">
        <div className="textSection mb-8 md:mb-0 md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Discover the Future with Student Research and Development
          </h1>
          <p className="mb-6">
            Join our community of innovators and researchers pushing the
            boundaries of knowledge and technology. Explore our latest projects
            and be part of the change.
          </p>
          <button className="bg-white text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300">
            Join Us
          </button>
        </div>
        <div className="imageSection md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64">
            <div className="absolute w-full h-full rounded-full bg-white opacity-20 animate-ping"></div>
            <img
              className="hero-img relative w-full h-full object-cover rounded-full"
              src="https://i.pinimg.com/originals/bc/97/e3/bc97e31c2be86087bbbc7062e67059a2.jpg"
              alt="Student Research"
            />
          </div>
        </div>
      </section>
      <div className="heroFooter flex justify-around py-8 bg-grey-700 shadow-lg">
        <div className="flex flex-col items-center text-blue-600">
          <i className="fa-solid fa-dice-d6 text-3xl mb-2"></i>
          <span>Innovative</span>
        </div>
        <div className="flex flex-col items-center text-blue-600">
          <i className="fa-solid fa-circle-dot text-3xl mb-2"></i>
          <span>Collaborative</span>
        </div>
        <div className="flex flex-col items-center text-blue-600">
          <i className="fa-solid fa-rotate text-3xl mb-2"></i>
          <span>Dynamic</span>
        </div>
        <div className="flex flex-col items-center text-blue-600">
          <i className="fa-solid fa-bars text-3xl mb-2"></i>
          <span>Comprehensive</span>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
