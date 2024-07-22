import React from 'react';
import EventCard from './EventCard';
import HeroSection from './HeroSection';

// Home Component
function Home() {
  // Example event data (replace with your actual event data)
  const events = [
    { title: "Event 1", date: "Date 1", id: "1" },
    { title: "Event 2", date: "Date 2", id: '2' },
    // Add more events as needed
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-12 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 typewriter">
            Welcome to the <span className="typewriter">Student Research and Development Cell</span>
          </h2>
          <HeroSection />
          <br />
          <br />
          {/* Upcoming Events Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>

          {/* Research Opportunities Card */}
          <div className="my-8">
            <h3 className="text-2xl font-bold mb-4">Research Opportunities</h3>
            <p className="text-lg">
              Explore ongoing research projects and discover how you can get involved. Whether you're
              interested in joining existing projects or proposing your own, there are opportunities for everyone.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
