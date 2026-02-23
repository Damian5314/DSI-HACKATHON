import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';
import L from 'leaflet';

// Fix voor Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Voorbeeld event locaties - Rotterdam Zuid (later van backend)
const exampleLocations = [
  {
    id: 1,
    name: 'Voetbalveld Afrikaanderplein',
    type: 'Voetbal',
    lat: 51.9019,
    lng: 4.4877,
    participants: 5,
    maxParticipants: 12,
    time: '18:00',
  },
  {
    id: 2,
    name: 'Basketbalcourt Zuiderpark',
    type: 'Basketbal',
    lat: 51.8872,
    lng: 4.4953,
    participants: 3,
    maxParticipants: 10,
    time: '19:30',
  },
  {
    id: 3,
    name: 'Skatepark Feyenoord',
    type: 'Skaten',
    lat: 51.8950,
    lng: 4.5020,
    participants: 7,
    maxParticipants: 15,
    time: '16:00',
  },
  {
    id: 4,
    name: 'Sporthal Charlois',
    type: 'Basketbal',
    lat: 51.8800,
    lng: 4.4720,
    participants: 4,
    maxParticipants: 10,
    time: '20:00',
  },
];

// Custom marker icons per event type
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

  const iconHtml = `
    <div style="position: relative; width: 40px; height: 40px;">
      <div style="
        width: 40px;
        height: 40px;
        background-color: ${color};
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
      ">
        ${emoji}
      </div>
      <div style="
        position: absolute;
        top: 0;
        left: 0;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 2px solid ${color};
        opacity: 0.5;
        animation: pulse 2s infinite;
      "></div>
    </div>
  `;

  return L.divIcon({
    html: iconHtml,
    className: 'custom-marker',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
  });
};

function MapView() {
  const [locations] = useState(exampleLocations);
  const [center] = useState([51.8917, 4.4892]); // Rotterdam Zuid

  return (
    <div style={{ height: '100vh', width: '100%', position: 'relative' }}>
      <MapContainer
        center={center}
        zoom={14}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {locations.map((location) => (
          <Marker
            key={location.id}
            position={[location.lat, location.lng]}
            icon={createCustomIcon(location.type)}
          >
            <Popup>
              <div style={{ minWidth: '200px' }}>
                <h3 style={{ margin: '0 0 8px 0', fontSize: '16px' }}>
                  {location.name}
                </h3>
                <p style={{ margin: '4px 0', fontSize: '14px' }}>
                  <strong>Type:</strong> {location.type}
                </p>
                <p style={{ margin: '4px 0', fontSize: '14px' }}>
                  <strong>Tijd:</strong> {location.time}
                </p>
                <p style={{ margin: '4px 0', fontSize: '14px' }}>
                  <strong>Deelnemers:</strong> {location.participants}/{location.maxParticipants}
                </p>
                <button
                  style={{
                    marginTop: '8px',
                    width: '100%',
                    padding: '8px 16px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '14px',
                  }}
                  onClick={() => console.log('Joining event', location.id)}
                >
                  Aanmelden
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* CSS voor pulserende animatie */}
      <style>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.3);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default MapView;
