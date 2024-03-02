import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function EventCard({ event }) {
  return (
    <Link to={`/events/${event.id}`} className="block">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        {/* Event Title */}
        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
        {/* Event Date */}
        <p className="text-gray-400">{event.date}</p>
      </div>
    </Link>
  );
}

export default EventCard;
