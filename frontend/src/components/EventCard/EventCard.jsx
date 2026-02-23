import './EventCard.css';

const EVENT_COLORS = {
  Voetbal: '#4CAF50',
  Basketbal: '#FF9800',
  Skaten: '#9C27B0',
  default: '#2196F3',
};

const EVENT_EMOJIS = {
  Voetbal: '⚽',
  Basketbal: '🏀',
  Skaten: '🛹',
  default: '🎯',
};

function EventCard({ event, onJoin }) {
  const color = EVENT_COLORS[event.type] || EVENT_COLORS.default;
  const emoji = EVENT_EMOJIS[event.type] || EVENT_EMOJIS.default;
  const percentage = (event.participants / event.maxParticipants) * 100;

  const getStatusColor = () => {
    if (percentage >= 90) return '#f44336';
    if (percentage >= 70) return '#ff9800';
    return '#4caf50';
  };

  return (
    <div className="event-card">
      <div className="event-header" style={{ backgroundColor: color }}>
        <span className="event-emoji">{emoji}</span>
        <div className="event-type">{event.type}</div>
      </div>
      <div className="event-body">
        <h3 className="event-name">{event.name}</h3>
        <p className="event-location">📍 {event.location}</p>
        <p className="event-datetime">
          📅 {event.date} om {event.time}
        </p>
        {event.description && (
          <p className="event-description">{event.description}</p>
        )}
        <div className="event-participants">
          <div className="participants-text">
            {event.participants}/{event.maxParticipants} deelnemers
          </div>
          <div className="progress-bar-container">
            <div
              className="progress-bar-fill"
              style={{
                width: `${percentage}%`,
                backgroundColor: getStatusColor(),
              }}
            />
          </div>
        </div>
        <button
          className="join-event-button"
          onClick={() => onJoin(event)}
          style={{ backgroundColor: color }}
        >
          Aanmelden
        </button>
      </div>
    </div>
  );
}

export default EventCard;
