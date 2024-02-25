import React from 'react';
// Make sure to import the styles.css file
import EventCard from './EventCard'; // Import the EventCard component

// Home Component
function Home() {
  // Example event data (replace with your actual event data)
  const events = [
    { title: "Event 1", date: "Date 1" },
    { title: "Event 2", date: "Date 2" },
    // Add more events as needed
  ];

  return (
    <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-12 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-8 typewriter">
          Welcome to the <span className="typewriter">Student Research and Development Cell</span>
        </h2>

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

        {/* Introduction to the Cell */}
        <div className="my-8">
          <h3 className="text-2xl font-bold mb-4">Introduction to the Cell</h3>
          <p className="text-lg">
             Student Research and Development Cell, its mission,
            and its role in fostering research and development activities among students.
          </p>
        </div>

        {/* Meet the Team */}
        <div className="my-8">
          <h3 className="text-2xl font-bold mb-4">Meet the Team</h3>
          {/* Add team members' information, photos, etc. */}
          <ul>
          <li>Faculty Advisors: Nilay Pandey</li>
          <li>Researchers: Vishal Gaurav</li>
          <li>Student Leaders: Vaibhav Raj</li>
        </ul>
        </div>

        {/* Additional Sections (Add more sections based on your needs) */}
      </div>
    </section>
  );
}

export default Home;
