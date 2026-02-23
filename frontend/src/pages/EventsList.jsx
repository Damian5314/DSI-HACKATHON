import { useState } from 'react';
import EventCard from '../components/EventCard/EventCard';

const exampleEvents = [
  {
    id: 1,
    name: 'Voetbalwedstrijd',
    location: 'Voetbalveld Afrikaanderplein',
    type: 'Voetbal',
    participants: 5,
    maxParticipants: 12,
    time: '18:00',
    date: '2024-02-25',
  },
  {
    id: 2,
    name: 'Basketbal Pickup Game',
    location: 'Basketbalcourt Zuiderpark',
    type: 'Basketbal',
    participants: 3,
    maxParticipants: 10,
    time: '19:30',
    date: '2024-02-25',
  },
  {
    id: 3,
    name: 'Skaten in Feyenoord',
    location: 'Skatepark Feyenoord',
    type: 'Skaten',
    participants: 7,
    maxParticipants: 15,
    time: '16:00',
    date: '2024-02-26',
  },
  {
    id: 4,
    name: 'Late Night Basketball',
    location: 'Sporthal Charlois',
    type: 'Basketbal',
    participants: 4,
    maxParticipants: 10,
    time: '20:00',
    date: '2024-02-26',
  },
];

function EventsList() {
  const [events] = useState(exampleEvents);

  const handleJoinEvent = (eventId) => {
    console.log('Joining event:', eventId);
    // Hier komt later de API call naar de backend
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Aankomende Events</h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
        {events.map((event) => (
          <EventCard key={event.id} event={event} onJoin={handleJoinEvent} />
        ))}
      </div>
    </div>
  );
}

export default EventsList;
