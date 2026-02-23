import EventCard from '../components/EventCard/EventCard';
import './EventsList.css';

const mockEvents = [
  {
    id: 1,
    name: 'Afrikaanderplein Voetbal',
    type: 'Voetbal',
    location: 'Afrikaanderplein, Rotterdam Zuid',
    participants: 8,
    maxParticipants: 12,
    date: '2026-02-25',
    time: '18:00',
    description: 'Voetbal wedstrijd voor jongeren in de buurt',
  },
  {
    id: 2,
    name: 'Zuiderpark Basketbal',
    type: 'Basketbal',
    location: 'Zuiderpark, Rotterdam Zuid',
    participants: 6,
    maxParticipants: 10,
    date: '2026-02-26',
    time: '17:30',
    description: '3 tegen 3 basketbal toernooi',
  },
  {
    id: 3,
    name: 'Feyenoord Skatepark',
    type: 'Skaten',
    location: 'Feyenoord, Rotterdam Zuid',
    participants: 5,
    maxParticipants: 15,
    date: '2026-02-27',
    time: '16:00',
    description: 'Skate sessie met tricks en tips',
  },
  {
    id: 4,
    name: 'Charlois Voetbal',
    type: 'Voetbal',
    location: 'Charlois, Rotterdam Zuid',
    participants: 10,
    maxParticipants: 12,
    date: '2026-02-28',
    time: '19:00',
    description: 'Avond voetbal wedstrijd onder de lampen',
  },
];

function EventsList() {
  const handleJoinEvent = (event) => {
    console.log('Aanmelden voor:', event.name);
    // TODO: API call naar backend
  };

  return (
    <div className="events-list-page">
      <div className="events-container">
        <h1>Alle Evenementen</h1>
        <div className="events-grid">
          {mockEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onJoin={handleJoinEvent}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default EventsList;
