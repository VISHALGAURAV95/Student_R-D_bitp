import React from 'react';
import { useParams } from 'react-router-dom';

function EventDetail() {
  // Get the event ID from the URL params
  const { id } = useParams();
console.log(id)
  // Manually define event details
  const eventDetails = {
    // Define event details for each event ID
    // Replace the event IDs and details with your own
    '1': {
      title: 'Event 1',
      date: 'Date 1',
      description: 'Description for Event 1',
    },
    '2': {
      title: 'Event 2',
      date: 'Date 2',
      description: 'Description for Event 2',
    },
    // Add more event details as needed
  };

  // Get event details based on the event ID
  const event = eventDetails[id];

  // Render loading message if event details are not found
  if (!event) {
    return <div>Event not found</div>;
  }

  // Render event details once found
  return (
    <div>
      {/* Display event details */}
      <h2>{event.title}</h2>
      <p>Date: {event.date}</p>
      <p>Description: {event.description}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default EventDetail;
