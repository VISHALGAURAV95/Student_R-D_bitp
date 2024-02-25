import React from 'react';

// EventCard Component
function EventCard({ event }) {
  return (
    <div className="bg-gray-700 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
      <p className="text-sm text-gray-300">{event.date}</p>
    </div>
  );
}

export default EventCard;
