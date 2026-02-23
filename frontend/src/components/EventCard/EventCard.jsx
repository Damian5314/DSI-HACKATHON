function EventCard({ event, onJoin }) {
  const participantPercentage = (event.participants / event.maxParticipants) * 100;

  const getStatusColor = () => {
    if (participantPercentage >= 80) return '#f44336'; // Bijna vol
    if (participantPercentage >= 50) return '#ff9800'; // Half vol
    return '#4CAF50'; // Genoeg plek
  };

  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        transition: 'transform 0.2s, box-shadow 0.2s',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h3 style={{ margin: '0 0 8px 0', color: '#333' }}>{event.name}</h3>
          <p style={{ margin: '4px 0', color: '#666', fontSize: '14px' }}>
            📍 {event.location}
          </p>
          <p style={{ margin: '4px 0', color: '#666', fontSize: '14px' }}>
            🏷️ {event.type}
          </p>
          {event.date && (
            <p style={{ margin: '4px 0', color: '#666', fontSize: '14px' }}>
              📅 {event.date} om {event.time}
            </p>
          )}
        </div>
        <span
          style={{
            padding: '4px 8px',
            borderRadius: '4px',
            backgroundColor: getStatusColor(),
            color: 'white',
            fontSize: '12px',
            fontWeight: 'bold',
          }}
        >
          {event.participants}/{event.maxParticipants}
        </span>
      </div>

      <div style={{ marginTop: '12px' }}>
        <div
          style={{
            width: '100%',
            height: '6px',
            backgroundColor: '#eee',
            borderRadius: '3px',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: `${participantPercentage}%`,
              height: '100%',
              backgroundColor: getStatusColor(),
              transition: 'width 0.3s ease',
            }}
          />
        </div>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onJoin && onJoin(event.id);
        }}
        style={{
          marginTop: '12px',
          width: '100%',
          padding: '10px',
          backgroundColor: '#2196F3',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: '500',
          transition: 'background-color 0.2s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#1976D2';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#2196F3';
        }}
        disabled={event.participants >= event.maxParticipants}
      >
        {event.participants >= event.maxParticipants ? 'Vol' : 'Aanmelden'}
      </button>
    </div>
  );
}

export default EventCard;
