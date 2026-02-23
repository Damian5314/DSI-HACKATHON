import { useState } from 'react';

function Profile() {
  const [user] = useState({
    name: 'Test Gebruiker',
    level: 5,
    points: 850,
    eventsAttended: 12,
    achievements: [
      { id: 1, name: 'Eerste Event', icon: '🏆' },
      { id: 2, name: 'Team Player', icon: '⚽' },
      { id: 3, name: 'Actieve Deelnemer', icon: '🎯' },
    ],
  });

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Mijn Profiel</h1>

      <div
        style={{
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '20px',
          backgroundColor: '#f9f9f9',
          marginBottom: '20px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              backgroundColor: '#4CAF50',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px',
              color: 'white',
            }}
          >
            {user.name.charAt(0)}
          </div>
          <div>
            <h2 style={{ margin: '0 0 8px 0', color: '#333' }}>{user.name}</h2>
            <p style={{ margin: '4px 0', color: '#666' }}>
              Level {user.level} | {user.points} punten
            </p>
            <p style={{ margin: '4px 0', color: '#666' }}>
              {user.eventsAttended} events bijgewoond
            </p>
          </div>
        </div>
      </div>

      <h2>Achievements</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '16px' }}>
        {user.achievements.map((achievement) => (
          <div
            key={achievement.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '16px',
              backgroundColor: '#fff',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '48px', marginBottom: '8px' }}>
              {achievement.icon}
            </div>
            <p style={{ margin: 0, fontWeight: 'bold', color: '#333' }}>{achievement.name}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '20px' }}>
        <h2>Statistieken</h2>
        <div
          style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '16px',
            backgroundColor: '#f9f9f9',
          }}
        >
          <p style={{ color: '#333', margin: '8px 0' }}>Voetbal events: 6</p>
          <p style={{ color: '#333', margin: '8px 0' }}>Basketbal events: 4</p>
          <p style={{ color: '#333', margin: '8px 0' }}>Overige activiteiten: 2</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
