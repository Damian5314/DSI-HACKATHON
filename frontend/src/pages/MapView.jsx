import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './MapView.css';

// Fix for default marker icons in Leaflet with Vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const createCustomIcon = (type) => {
  const colors = {
    Voetbal: '#4CAF50',
    Basketbal: '#FF9800',
    Skaten: '#9C27B0',
    default: '#2196F3',
  };

  const emojis = {
    Voetbal: '⚽',
    Basketbal: '🏀',
    Skaten: '🛹',
    default: '🎯',
  };

  const color = colors[type] || colors.default;
  const emoji = emojis[type] || emojis.default;

  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div class="marker-container">
        <div class="marker-pulse" style="border-color: ${color};"></div>
        <div class="marker-icon" style="background-color: ${color};">
          <span class="marker-emoji">${emoji}</span>
        </div>
      </div>
    `,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
  });
};

const mockLocations = [
  {
    id: 1,
    name: 'Afrikaanderplein Voetbal',
    type: 'Voetbal',
    position: [51.8917, 4.4892],
    participants: 8,
    maxParticipants: 12,
    date: '2026-02-25',
    time: '18:00',
  },
  {
    id: 2,
    name: 'Zuiderpark Basketbal',
    type: 'Basketbal',
    position: [51.8850, 4.4980],
    participants: 6,
    maxParticipants: 10,
    date: '2026-02-26',
    time: '17:30',
  },
  {
    id: 3,
    name: 'Feyenoord Skatepark',
    type: 'Skaten',
    position: [51.8950, 4.5050],
    participants: 5,
    maxParticipants: 15,
    date: '2026-02-27',
    time: '16:00',
  },
  {
    id: 4,
    name: 'Charlois Voetbal',
    type: 'Voetbal',
    position: [51.8800, 4.4750],
    participants: 10,
    maxParticipants: 12,
    date: '2026-02-28',
    time: '19:00',
  },
];

function MapView() {
  const rotterdamZuid = [51.8917, 4.4892];

  const handleJoinEvent = (location) => {
    console.log('Aanmelden voor:', location.name);
    // TODO: API call naar backend
  };

  return (
    <div className="map-view">
      <MapContainer
        center={rotterdamZuid}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {mockLocations.map((location) => (
          <Marker
            key={location.id}
            position={location.position}
            icon={createCustomIcon(location.type)}
          >
            <Popup>
              <div className="popup-content">
                <h3>{location.name}</h3>
                <p><strong>Type:</strong> {location.type}</p>
                <p><strong>Datum:</strong> {location.date}</p>
                <p><strong>Tijd:</strong> {location.time}</p>
                <p><strong>Deelnemers:</strong> {location.participants}/{location.maxParticipants}</p>
                <button
                  className="join-button"
                  onClick={() => handleJoinEvent(location)}
                >
                  Aanmelden
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default MapView;
