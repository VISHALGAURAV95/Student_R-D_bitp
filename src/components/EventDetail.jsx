import React from 'react';
import { useParams } from 'react-router-dom';

function EventDetail() {
  // Get the event ID from the URL params
  const {id}  = useParams();
console.log(id)
  // Manually define event details
  const eventDetails = {
    // Define event details for each event ID
    // Replace the event IDs and details with your own
    '1': {
      title: 'Event 1',
      date: 'Date 1',
      description: "A book is a medium for recording information in the form of writing or images. Books are typically composed of many pages, bound together and protected by a cover.[1] Modern bound books were preceded by many other written mediums, such as the codex and the scroll. The book publishing process is the series of steps involved in their creation and dissemination.As a conceptual object, a book typically refers to a written work of substantial length, which may be distributed either physically or in digital forms like ebooks. These works are broadly classified into fiction (containing imaginary content) and non-fiction (containing content representing truths). Many smaller categories exist within these, such as children's literature meant to match the reading level and interests of children, or reference works that gather collections of nonfiction. Books are traded at both regular stores and specialized bookstores, and people can borrow them from libraries. The reception of books has led to a number of social consequences, including censorship.A physical book does not need to contain written works: for example, it may contain only drawings, engravings, photographs, puzzles, or removable content like paper dolls. Physical books may be left empty to be used for writing or drawing, such as account books, appointment books, autograph books, notebooks, diaries and sketchbooks.The contemporary book industry has seen several major changes due to new technologies. In some markets, the sale of printed books has decreased due to the increased use of ebooks.[2] However, printed books still largely outsell ebooks, and many people have a preference for print.[3][4][5][6] The 21st century has also seen a rapid rise in the popularity of audiobooks, which are recordings of books being read aloud.[7] Additionally, awareness of the needs of people who can't access print media due to limitations like visual impairment has led to a rise in formats designed for greater accessibility, such as braille printing or formats supporting text-to-voice. Google Books estimated that as of 2010, approximately 130,000,000 unique books had been published.[8]",
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
  const backgroundImageUrl = 'https://images.pexels.com/photos/1229042/pexels-photo-1229042.jpeg?auto=compress&cs=tinysrgb&w=1200';

  return (
    <div className="min-h-screen bg-cover flex justify-center items-center" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
  <div className="relative rounded-lg shadow-lg p-8 max-w-4xl w-full bg-gradient-to-br from-blue-100 to-blue-300">
    {/* Event Title */}
    <h2 className="text-4xl font-bold mb-6">{event.title}</h2>
    {/* Event Date */}
    <p className="text-lg text-gray-600 mb-6">Date: {event.date}</p>
    {/* Event Description */}
    <p className="text-lg text-gray-700 mb-8">{event.description}</p>
    {/* Decorative line */}
    <div className="w-full h-1 bg-gray-300 mb-8"></div>
    {/* Additional information or actions */}
    <div className="flex justify-between items-center">
      <p className="text-gray-500">Posted by Vishal Gaurav</p>
    </div>
     {/* Ambient light effect */}
     {/* <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-current to-transparent w-16 h-full group-hover:w-full transition-all duration-300"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent w-full h-16 group-hover:h-full transition-all duration-300"></div>
    </div> */}
  </div>
</div>

  );
}

export default EventDetail;
